const express=require('express')
const Admin=require('../models/Admin');
const router=express.Router();
const { body, check, validationResult } = require('express-validator');
const bcrypt= require('bcryptjs');
var jwt= require('jsonwebtoken')

const JWT_SECRET= 'rabia'
//creating Admin 
router.post('/admin/signin',[
    body('email','Enter valid email').isEmail(),
    body("password",'password length must be 5 characters long').isLength({min:5}),
    body("confirmpassword").isLength({min:5}),
    body("phonenumber",'enter a valid phone number').isLength({min:11}),
    check('confirmpassword').custom((value, { req }) => {
        if (value !== req.body.password) {
              throw new Error('Password Confirmation does not match password');
         }
         return true;
    })
], async (req,res)=>{
    let success=false;
    // iff errors return bad request 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
try{
    let Admin= await Admin.findOne({ email:req.body.email});
    
    if(Admin){
        return res.status(400).json({success,error:"Admin with email already exists"})
    }
const salt= await bcrypt.genSalt(10);

    secPass= await bcrypt.hash( req.body.password,salt);
    sec2Pass= await bcrypt.hash( req.body.confirmpassword,salt);


admin = await Admin.create({
        email: req.body.email,
        password: secPass,
        confirmpassword: sec2Pass,
        phonenumber: req.body.phonenumber,
      });
      const data={
          admin:{
              id:admin.id
          }
      }
      const authToken=jwt.sign(data,JWT_SECRET);
      success=true
      res.json({success,authToken})
      // res.json(Admin); 
    }
    catch(error){
console.log(error.message);
res.status(500).send("some error occured");
    }
} 
)

//authenticateaAdmin
router.post('/admin/signup',[
    body('email','Enter valid email').isEmail(),
    body("password","password cannot be blank").exists(),
], async (req,res)=>{
    let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const{email,password}=req.body;
    try{

        let admin= await Admin.findOne({email});
        if(!admin)
        {
            success=false
            return res.status(400).json({error:"Please enter valid credentials"})
        }
const passwordCompare=await bcrypt.compare(password,admin.password);
if(!passwordCompare){
    success=false

    return res.status(400).json({success,error:"Please enter valid credentials"})
}

const data={
    admin:{
        id:admin.id
    }
}
const authToken=jwt.sign(data,JWT_SECRET);
success=true
res.json({success,authToken})
    }


    catch(error){
        console.log(error.message);
        res.status(500).send(" Internal server error occured");
    }



})


///Admin details
/*router.post('/getadmin' ,fetchAdmin, async(req,res)=>{
   

try{
    adminId=req.admin.id;
        const admin=await Admin.findById(adminId).select("-password").select('-confirmpassword');
        

        res.send(admin);
}
catch(error){
    console.log(error.message);
        res.status(500).send(" Internal server error occured");
} 
})*/

module.exports=router
const express=require('express')
const User=require('../models/User');
const router=express.Router();
const { body, check, validationResult } = require('express-validator');
const bcrypt= require('bcryptjs');
var jwt= require('jsonwebtoken')
var fetchuser= require('../middleware/fetchuser');

const JWT_SECRET= 'rabia'
//creating user 
router.post('/createuser',[
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
    let user= await User.findOne({ email:req.body.email});
    
    if(user){
        return res.status(400).json({success,error:"user with email already exists"})
    }
const salt= await bcrypt.genSalt(10);

    secPass= await bcrypt.hash( req.body.password,salt);
    sec2Pass= await bcrypt.hash( req.body.confirmpassword,salt);


user = await User.create({
        email: req.body.email,
        password: secPass,
        confirmpassword: sec2Pass,
        phonenumber: req.body.phonenumber,
      });
      const data={
          user:{
              id:user.id
          }
      }
      const authToken=jwt.sign(data,JWT_SECRET);
      success=true
      res.json({success,authToken})
      // res.json(user); 
    }
    catch(error){
console.log(error.message);
res.status(500).send("some error occured");
    }
} 
)

//authenticateauser
router.post('/login',[
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

        let user= await User.findOne({email});
        if(!user)
        {
            success=false
            return res.status(400).json({error:"Please enter valid credentials"})
        }
const passwordCompare=await bcrypt.compare(password,user.password);
if(!passwordCompare){
    success=false

    return res.status(400).json({success,error:"Please enter valid credentials"})
}

const data={
    user:{
        id:user.id
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


///user details
router.post('/getuser' ,fetchuser, async(req,res)=>{
   

try{
    userId=req.user.id;
        const user=await User.findById(userId).select("-password").select('-confirmpassword');
        

        res.send(user);
}
catch(error){
    console.log(error.message);
        res.status(500).send(" Internal server error occured");
} 
})

module.exports=router
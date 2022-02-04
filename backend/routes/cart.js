const express=require('express')
const router=express.Router();
const userlogin=require('../routes/auth')
const middleware=require('../middleware/fetchuser');
const Cart = require('../models/Cart');

router.post('/createitems',userlogin,middleware,(req,res)=>{

const cart= new Cart({
    user: req.user.id,
    items: req.body.items,
});

cart.save((error,cart)=>{

    if(error) return res.status(400).json({error});
    

    if(cart)
    {
        return res.status(200).json({cart});
    }

})

})

module.exports=router
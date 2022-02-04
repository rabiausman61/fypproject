const express=require('express')
const router=express.Router();
const Product=require('../models/Item');
const multer= require("multer")
const shortid=require('shortid')
const signinadmin=require('../routes/adminauth');
const fetchuser = require('../middleware/fetchuser');
const path=require('path')
const slugify=require('slugify');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate()+ '-'+ file)
    }
  })

  const upload=multer({storage});

router.post('/create', signinadmin,fetchuser, upload.array('productPicture'), (req,res)=>{
const {
    title, description,category, price,date_added} = req.body;
let productPicture=[]

    if(req.files.length>0)
{
productPicture= req.files.map(file=>{
    return {img:file.filename}
})

}
 const product= new Product({

title:title,
slug:slugify(title),
description,
category,
price,
date_added,
productPicture,
 });
 product.save(((error,product) =>{

    if(error)
    return res.status(400).json({error})

    if(product)
    res.status(200).json({product})
 }))
    
})







module.exports=router;
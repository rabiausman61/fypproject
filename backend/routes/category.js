const express=require('express');
const slugify = require('slugify');
const categories = require('../models/Categories');
const router=express.Router();
const Category=require('../models/Categories')
const middleware=require('../middleware/fetchuser')
const adminlogin=require('../routes/adminauth')

function createCategories(categories,parentId=null){
const categorylist=[];
let category;
if(parentId==null){
   category= categories.filter(cat=>cat.parentId==undefined);


}
else {category=categories.filter(cat=>cat.parentId==parentId)}
for (let cate of category)
categorylist.push({
    _id:cate._id,
    name:cate.name,
    slug:cate.slug,
    childern: createCategories(categories,cate._id)
})
return categorylist;
}

router.post('/create',adminlogin,middleware,(req,res)=>{

const categoryobject={
    name:req.body.name,
  slug:  slugify(req.body.name)
}
        if(req.body.parentId){
            categoryobject.parentId=req.body.parentId
        }
const c=new Category(categoryobject)
c.save((error,Category)=>{

    if(error) return res.status(400).json({error})
    if (Category){
        return res.status(200).json({Category})
    }
});
    

})

router.get('/getcategories',(req,res)=>{
Category.find({}).exec((error,categories)=>{
    if(error) return res.status(400).json({error})

    
if(categories){
    const categorylist= createCategories(categories);
    return res.status(200).json({categorylist})
}
})
})



module.exports=router
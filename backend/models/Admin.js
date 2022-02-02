const mongoose=require("mongoose")
const { Schema } = mongoose;

const AdminSchema = new Schema({
 email:{
            type:String,
            required:true,
            unique:true
 },
 password:{
    type:String,
    required:true
 },
 confirmpassword:{
     type:String,
    required:true
 },
 phonenumber:{
    type:Number,
    required:true,
 },
 
});
const Admin=mongoose.model('admin',AdminSchema);
module.exports=Admin
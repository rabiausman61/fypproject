const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ItemSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim:true

  },
  slug:{
    type:String,
    required:true,
    unique:true

  },
  description: {
    type: String,
    required: true,
    trim:true
  },
 
  price: {
    type: Number,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
  productPicture:[
 { img: {
    type: String,
    required: true}
  },
],

category :{
  type: mongoose.Schema.Types.ObjectId, ref:'categories'
},
        
}
,{timestamps:true});

module.exports=mongoose.model("item", ItemSchema);

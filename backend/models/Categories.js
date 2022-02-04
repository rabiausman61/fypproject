const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim:true,

  },
  slug:{
    type:String,
    required:true,
    unique:true

  },
parentId:{
    type:String
} 
},

   { timestamps:true});



module.exports= mongoose.model("categories", CategoriesSchema);

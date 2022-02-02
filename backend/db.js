const mongoose= require('mongoose');
const mongoURI= 'mongodb://localhost:27017/fyp?readPreference=primary&appname=MongoDB%20Compass&ssl=false'

const connectToMongo =()=>
{

mongoose.connect(mongoURI,()=>{
console.log("connected to mongo succesfully")
})    
}
module.exports=connectToMongo;
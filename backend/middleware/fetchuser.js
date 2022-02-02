var jwt= require('jsonwebtoken')
const JWT_SECRET= 'rabia'


const fetchuser=(req,res,next)=>{
//getting user from jwt token + add id to req
const token= req.header('auth-token');
if(!token){
    res.status(401).send({error:'please authenticate using valid token'})
}
try{
const string = jwt.verify(token,JWT_SECRET);
req.user=string.user;
next();
}
catch(error)
{
    res.status(401).send({error:'please authenticate using valid token'})
}


}
module.exports=fetchuser;
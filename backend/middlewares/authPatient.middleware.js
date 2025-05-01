const jwt=require('jsonwebtoken')

const authPatient=(req,res,next)=>{
    const authHeader=req.header('Authorization')
    if(!authHeader){
        return res.status(401).send({message:"Token not provided"})
    }
    let token=authHeader.split(" ")[1]
    try{
        let decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.patientId=decoded.id
        next()
    }
    catch(error){
        return res.status(401).send({message:"Invalid Token"})
    }
}
module.exports=authPatient
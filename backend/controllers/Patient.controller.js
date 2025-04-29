const validator=require('validator')
const patientModel=require('./../models/Patient.model.js')
const jwt=require('jsonwebtoken')

//Patient registration
const patientRegister=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        if(!name || !password || !email){
            res.status(400).send({message:"Please enter all details"})
        }
        if(!validator.isEmail(email)){
            res.status(400).send({message:"Please enter a valid email"})
        }
        if(password.length<8){
            res.status(400).send({message:"Please enter a strong password"})
        }

        const pateintData={
            name,
            email,
            password
        }
        let patient=await patientModel.create(pateintData)
        const token=jwt.sign({id:patient._id},process.env.JWT_SECRET)
        res.status(200).send({token})
    }
    catch(err){
        res.status(400).send({"message":err.message})
    }
}

//Patient login
const patientLogin=async(req,res)=>{
    try{ 
        let { email, password } = req.body
        let patient = await patientModel.findOne({email})
        if(patient){
            if(patient.password === password){
                let token = jwt.sign({id: patient.id, email: patient.email}, process.env.JWT_SECRET)
                res.status(200).send({token: token, patient: patient.id})
            } else {
                res.status(400).send({message: "Invalid Credentails"})
            }
        } else {
            res.status(400).send({message: "Patient does not exist"})
        }
    
    } catch(error) {
        res.status(500).send({message: "Server Error"})
    }
}

const getPatientData=async(req,res)=>{
    try{
        const {patientId}=req.body
        const patientData=await patientModel.findById(patientId).select('-password')
        res.status(200).send({patientData})
    }
    catch(error){
        res.status(500).send({message: "Server Error"})
    }
}
module.exports={patientRegister,
    patientLogin,
    getPatientData
}
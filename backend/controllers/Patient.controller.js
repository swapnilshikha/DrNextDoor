const validator=require('validator')
const patientModel=require('./../models/Patient.model.js')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

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

        const patientData={
            name,
            email,
            password
        }

        const salt=await bcrypt.genSalt(10)
        patientData.password=await bcrypt.hash(password,salt)
        
        let patient=await patientModel.create(patientData)
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
            const isMatch=await bcrypt.compare(password,patient.password)
            
            if(isMatch){
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

//getting patient data
const getPatientData=async(req,res)=>{
    try{
        const {patientId}=req        
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
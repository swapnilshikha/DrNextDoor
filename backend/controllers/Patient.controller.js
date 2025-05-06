const validator=require('validator')
const patientModel=require('./../models/Patient.model.js')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

//Patient registration
const patientRegister=async(req,res)=>{
    try{
        
        const {name,email,password}=req.body
        if(!name || !password || !email){
            return res.status(400).send({message:"Please enter all details"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).send({message:"Please enter a valid email"})
        }
        if(password.length<8){
            return res.status(400).send({message:"Please enter a strong password"})
        }
        const existingPatient = await patientModel.findOne({ email });
        if (existingPatient) {
            return res.status(400).json({ message: "Email is already registered" });
        }
        const image = req.file?.filename || "default_patient.png"; // fallback if image is not uploaded

        const patientData={
            name,
            email,
            password,
            image
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
                let token = jwt.sign({id: patient._id, email: patient.email}, process.env.JWT_SECRET)
                res.status(200).send({token: token, patient: patient})
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
        const patientId=req.patientId    
           
        const patientData=await patientModel.findOne({_id:patientId})
        console.log("PatientData",patientData);
        
        let modPatient={
            ...patientData.toObject(),
            image:process.env.IMAGE_URL+patientData.image
        }
        if(modPatient){
            res.status(200).send(modPatient)
            
        }
        else{
            res.status(404).send({"message": "Invalid id"})

        }
        
    }
    catch(error){
        res.status(500).send({message: "Server Error"})
    }
}

const updateProfile = async (req, res) => {
    try {
       const {patientId}=req
       let patient=req.body
       if (req.file?.filename) {
        patient.image = req.file.filename;
    }       
       patient=await patientModel.findOneAndUpdate({_id:patientId},patient)
        
        res.status(200).send({ patient });

    } catch (error) {
        res.status(500).send({ message: "Server Error", error: error.message });
    }
};

module.exports={patientRegister,
    patientLogin,
    getPatientData,
    updateProfile
}
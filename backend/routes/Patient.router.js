const express=require('express')
const {patientRegister,
    patientLogin,
    getPatientData,
    updateProfile
}=require('./../controllers/Patient.controller.js')
const authPatient = require('../middlewares/authPatient.middleware.js')
const {upload}=require('./../middlewares/multer.middleware.js')

const patientRouter=express.Router()

patientRouter.post('/register',upload.single('image'),patientRegister)
patientRouter.post('/login',patientLogin)
patientRouter.get('/getById',authPatient,getPatientData)
patientRouter.put('/updateProfile',authPatient,  upload.single('image'),updateProfile)

module.exports=patientRouter
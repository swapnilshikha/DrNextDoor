const express=require('express')
const {patientRegister,
    patientLogin,
    getPatientData,
    updateProfile,
    getAllDoctors,
    getDrById,
    bookAppointment
}=require('./../controllers/Patient.controller.js')
const authPatient = require('../middlewares/authPatient.middleware.js')
const {upload}=require('./../middlewares/multer.middleware.js')

const patientRouter=express.Router()

patientRouter.post('/register',upload.single('image'),patientRegister)
patientRouter.post('/login',patientLogin)
patientRouter.get('/getById',authPatient,getPatientData)
patientRouter.put('/updateProfile',authPatient,  upload.single('image'),updateProfile)
patientRouter.get('/getAllDoctors',getAllDoctors)
patientRouter.get('/getDrById/:id',getDrById)
patientRouter.post('/bookAppointment',authPatient,bookAppointment)

module.exports=patientRouter
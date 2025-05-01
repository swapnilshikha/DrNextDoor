const express=require('express')
const {patientRegister,
    patientLogin,
    getPatientData
}=require('./../controllers/Patient.controller.js')
const authPatient = require('../middlewares/authPatient.middleware.js')

const patientRouter=express.Router()

patientRouter.post('/register',patientRegister)
patientRouter.post('/login',patientLogin)
patientRouter.get('/getById',authPatient,getPatientData)

module.exports=patientRouter
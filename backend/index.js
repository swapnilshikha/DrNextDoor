const path = require('path')
const express = require('express');
const dbConnect = require('./utils/db');

const cors=require('cors')

require('dotenv').config()

const PORT = process.env.PORT || 5000;
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`)
    dbConnect();
})
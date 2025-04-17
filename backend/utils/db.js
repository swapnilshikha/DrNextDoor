const mongoose=require('mongoose')
require('dotenv').config();
const DB_URL=process.env.DB_URL
const DB_NAME=process.env.DB_NAME
async function dbConnect(){
    try{
        await mongoose.connect(`${DB_URL}/${DB_NAME}`)
        console.log("Database Connected");
    }
    catch(err){
        console.log(err);
    }
}
module.exports=dbConnect
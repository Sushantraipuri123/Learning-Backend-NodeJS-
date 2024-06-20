var mongoose = require('mongoose');

const dotenv = require('dotenv')
dotenv.config()

mongoose.set("strictQuery")

async function connectDb(){
    try {
        await mongoose.connect(process.env.MONGO_CONNECT)
        console.log("connected Successfully")
    } catch (error) {
        
    }
}

module.exports = connectDb
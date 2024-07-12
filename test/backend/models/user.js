var mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userName:{
        type : String
    },
    email:{
        type:String
    },
    empid:{
        type : String,
        required:true,
        unique:true
    },
    contact:{
        type : String,
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('User', userSchema);
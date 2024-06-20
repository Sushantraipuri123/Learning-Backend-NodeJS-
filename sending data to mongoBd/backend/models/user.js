var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type : String
    },
     lastName:{
        type : String
    },
   
     password:{
        type : String
    },
   

},
{
    timestamps:true
})

module.exports = mongoose.model("user", userSchema)
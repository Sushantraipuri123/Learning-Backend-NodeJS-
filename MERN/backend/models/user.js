var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type : String
    },
     lastName:{
        type : String
    },
    email:{
        type:String
    }
},
{
    timestamps:true
}
)


module.exports = mongoose.model('User', userSchema);
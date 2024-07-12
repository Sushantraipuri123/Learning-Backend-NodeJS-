var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
        type : String
    },
    email:{
        type : String
    },
    address:{
        type : String
    },
    phone:{
        type : String
    },
    password:{
        type : String
    },
},{
    timestamps: true
}
);

module.exports = mongoose.model('User', userSchema);
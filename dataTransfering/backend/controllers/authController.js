var db = require('../models/user')
var jwt = require('jsonwebtoken');
const secretkey = 'shhhhh'
module.exports = {

    createUser : async (req, res)=>{
        try {
         
            const findemail = await db.findOne({
                email:req.body.email
            })
            if(findemail){
                return("This email alredy exist")
            }

            const user = await db.create({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email
            })

            var token = jwt.sign({ foo: 'bar' }, 'secretkey');

        
            user.token = token
            res.status(200).json({
                success:true,
                status:200,
                message:"User Created",
                body:user,
                token:token
            })

        } catch (error) {
            console.log(error)
        }
    },


    findUser : async (req,res)=>{
        try {
            const user = await db.findOne({
                _id:req.body._id
            })
            res.status(200).json({
                success:true,
                status:200,
                message:"User found",
                body:user
            })
        } catch (error) {
            console.log(error)
        }
    }
}
const db = require('../models/user')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;
const secretkey = 'ashu'

module.exports = {

    createUser : async (req,res)=>{
        try {

            const findEmail = await db.findOne({
                email:req.body.email
            })
            if(findEmail){
                return ("Eamil exists")
            }

            
            const hashpass = await bcrypt.hash(req.body.password, saltRounds)

            const user = await db.create({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:hashpass
            })

            var token = jwt.sign({ foo: 'bar' }, 'secretkey');
    user.token = token
          res.status(200).json({
            success:true,
            status:200,
            message:"User Created ",
            body:user,
            token:token
          })
        } catch (error) {
            console.log(error)
        }
    },

    deleteUSer : async (req,res)=>{
        try {
      
            const user = await db.deleteMany({
                _id:req.body._id
            })
            res.status(200).json({
                success:true,
                status:200,
                message:"User Created ",
                body:user
              })
        } catch (error) {
            console.log(error)
        }
    }
}





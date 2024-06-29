const db = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

    createUser : async (req,res)=>{
        try {

            const hashpass = await bcrypt.hash(req.body.password, saltRounds)

          const user = await  db.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
             password:hashpass
          })

            res.status(200).json({
                success:true,
                status:200,
                messsage:"user created...!",
                body:user
            })
        } catch (error) {
            console.log(error)
        }
    },

    getUSers : async ( req, res)=>{

        try {
            const user = await db.find({});
            console.log({user});

            res.status(200).json({
                success:true,
                status:200,
                messsage:"user found...!",
                body:user
            })
        } catch (error) {
            console.log(error)
        }
    }
}
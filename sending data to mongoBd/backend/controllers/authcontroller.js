var db = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {
    
    createUser : async (req, res)=>{
        try {

            const hashpass = await bcrypt.hash(req.body.password, saltRounds)

            const user = await db.create({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                password:hashpass
            })
    
            res.status(200).json({
                success:true,
                status:200,
                message:"User Created",
                body:user,
            })
        } catch (error) {
            console.log(error)
        }
    },

    getAllUsers: async (req, res)=>{
        try {
            const users = await db.find()

            res.status(200).json({
                success: true,
                status: 200,
                message: "Users found",
                body: users
            });
        } catch (error) {
            console.log(error);
           
        }
    },

    findOneUser: async (res,req)=>{
        try {
          const user = await db.findOne({
            _id:req.body._id
          })

          res.status(200).json({
            success:true,
            status:200,
            messsage:"User Found",
            body:user
          })
        } catch (error) {
            console.log(error)
        }
    },

    deleteUser : async (req, res)=>{
        try {
          const user = await db.deleteOne({
            _id:req.body._id
          })

          res.status(200).json({
            success:true,
            status:200,
            message:"done",
            body:user
          })
        } catch (error) {
            console.log(error)
        }
    },

    updatedata : async (req, res)=>{
        try {
            const user = await db.updateOne({
                _id:req.body._id
        },{
            $set:{
                "firstName":"Abc"
            }
        }
    )
    res.status(200).json({
        success:true,
        status:200,
        message:"updated value",
        body:user
    })
             
        } catch (error) {
            console.log(error)
        }
    },

   
}
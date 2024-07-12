const db = require('../models/user')


module.exports = {

    createUser : async (req,res)=>{
        
        try {
            const user = await db.create({
                userName:req.body.userName,
                email:req.body.email,
                empid:req.body.empid,
                contact:req.body.contact
            })

            res.status(200).json({
                success:true,
                status:200,
                message:"User Created ",
                body:user,
              })

        } catch (error) {
             console.log(error)
        }
    },

    getUser : async (req,res)=>{
        try {
            const user = await db.findOne({
                empid:req.body.empid
            })

            res.status(200).json({
                success:true,
                status:200,
                message:"User found ",
                body:user,
              })

        } catch (error) {
            console.log(error)
        }
    }
}
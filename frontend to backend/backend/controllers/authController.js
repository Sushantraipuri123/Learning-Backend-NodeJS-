const db = require('../models/user')

module.exports = {

    createUser : async (req,res)=>{

        try {

          const user = await  db.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email
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
    }
}
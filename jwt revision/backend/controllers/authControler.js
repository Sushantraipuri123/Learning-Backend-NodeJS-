var db = require('../models/user.models');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secretkey = 'ashu'
const saltRounds = 10;

module.exports = {

    createUser : async (req, res) => {
        try {
           
            const hashpassword =  await bcrypt.hash(req.body.password, saltRounds)

            const user = await db.create({
                userName: req.body.userName,
                email: req.body.email,
                address: req.body.address,
                phone: req.body.phone,
                password: hashpassword,
                token: ''
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
            console.log(error);
        }
    },

    getUsers : async (req, res)=> {
        try {
            const users = await db.find({})
            res.status(200).json({
                success:true,
                status:200,
                message:"Users Fetched",
                body:users
            })
        } catch (error) {
            console.log(error);
        }
    },
}
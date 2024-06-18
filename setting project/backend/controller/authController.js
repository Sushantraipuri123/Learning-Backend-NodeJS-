const db = require('../models/user')

module.exports = {
    createUser : async (req, res) =>{
        try {
            const data = db.create({
                firstName : req.body.firstName,
                lastName: req.body.lastName,
            })

            res.status(200).json({
                success: true,
                status: 200,
                message: message,
                body: data,
            })
        } catch (error) {
            console.log(error);
        }
    }
}
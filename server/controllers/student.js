const studentModel = require('../models/studentModel')

module.exports.login = () => {
    return async (req,res) => {
        const studentData = req.body
        const studentAuth = await studentModel.findOne({roll:studentData.roll})
        try {
            if(studentAuth){
                return res.status(200).json({
                    login:true,
                    message:'login successful',
                    data:studentAuth
                })
            }
            else{
                return res.json({
                    login:false,
                    message:'user not found'
                })
            }
        } catch (error) {
            res.status(400).json({
                login:false,
                message:'user not found'
            })
        }
    }
}
const librarianModel = require('../models/librarianModel')

module.exports.login = () => {
    return async (req,res) => {
        const librarianData = req.body
        const librarianAuth = await librarianModel.findOne({name:librarianData.name,password:librarianData.password})
        
        try {
            if(librarianAuth){
                return res.status(200).json({
                    login:true,
                    message:'login successful',
                    data:librarianAuth
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
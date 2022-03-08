const studentModel = require('../models/studentModel')
const mongoose = require('mongoose')
const { createTokens } = require('../service/token')
const bcrypt = require('bcrypt')

module.exports.login = () => {
    return async (req,res) => {
        const studentData = req.body
        const authData = await studentModel.findOne({name: studentData.name,roll:studentData.roll})
        try {
            await bcrypt.compare(studentData.password,authData.password)
            .then((auth) => {
                if(auth){
                    const token = createTokens({login:true,data:authData})
                    return res.status(200).json({
                        login:true,
                        message:'login successful',
                        data:authData,
                        token:token
                    })
                }
                else{
                    return res.json({
                        login:false,
                        message:'user not found'
                    })
                }
            })
        } catch (error) {
            res.status(400).json({
            login:false,
            message:'user not found',
            error:error
            })
        }
        // try {
        //     if(authData){
        //         const token = createTokens({login:true,data:authData})
        //         return res.status(200).json({
        //             login:true,
        //             message:'login successful',
        //             data:authData,
        //             token:token
        //         })
        //     }
        //     else{
        //         return res.json({
        //             login:false,
        //             message:'user not found'
        //         })
        //     }
        // } catch (error) {
        //     res.status(400).json({
        //         login:false,
        //         message:'user not found'
        //     })
        // }
    }
}

module.exports.getIssueFine = () => {
    return async (req,res) => {
        const {id} = req.params
        const studentFineBal = req.body
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No student with that Id')
        const student = await studentModel.findById(id)
        const updatedStudent =  await studentModel.findByIdAndUpdate(id,{fineBal:student.fineBal + studentFineBal.fineBal},{new:true})
        res.json(updatedStudent)
    }
}

const mongoose = require('mongoose')
const adminModel = require('../models/adminMode')
const studentModel = require('../models/studentModel')
const librarianModel = require('../models/librarianModel')
const { createTokens,checkToken } = require('../service/token')
const bcrypt = require('bcrypt')

module.exports.login = () => {
    return async (req,res) => {
        const adminData = req.body
        const adminAuth = await adminModel.findOne({name:adminData.name,password:adminData.password})
        try {
            if(adminAuth){
                const token = createTokens({login:true,data:adminAuth})
                res.status(200).json({
                    login:true,
                    message:'login successful',
                    data:adminAuth,
                    token:token
                })
            }
            else{
                res.json({
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

module.exports.createStudent = () => {
    return async (req,res) => {
        const student = req.body
        const hashedPassword = await bcrypt.hash(student.password,10)
        student.password = hashedPassword
        
        const newStudent = new studentModel(student)
        try {
            await newStudent.save()
            res.status(201).json(newStudent)
        } catch (error) {
            res.status(409).json({message: error.message})
        }
    }
}

module.exports.getStudents = () => {
    return async (req,res) => {
        try {
            const students = await studentModel.find()
            res.status(200).json(students)
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }
}

module.exports.updateStudent = () => {
    return async (req,res) => {
        const {id: _id} = req.params
        const student = req.body
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No student with that Id')
        const updatedStudent =  await studentModel.findByIdAndUpdate(_id,{...student,_id},{new:true})
        res.json(updatedStudent)
    }
}

module.exports.deleteStudent = () => {
    return async (req,res) => {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Student with that Id')
        await studentModel.findByIdAndDelete(id)
        res.json({message:"Student deleted successfully !"})
    }
}

module.exports.createLibrarian = () => {
    return async (req,res) => {
        const librarian = req.body
        const hashedPassword = await bcrypt.hash(librarian.password,10)
        librarian.password = hashedPassword
        const newLibrarian = new librarianModel(librarian)
        try {
            await newLibrarian.save()
            res.status(201).json(newLibrarian)
        } catch (error) {
            res.status(409).json({message: error.message})
        }
    }
}

module.exports.getLibrarians = () => {
    return async (req,res) => {
        try {
            const librarians = await librarianModel.find()
            res.status(200).json(librarians)
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }
}

module.exports.updateLibrarian = () => {
    return async (req,res) => {
        const {id: _id} = req.params
        const librarian = req.body
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No librarian with that Id')
        const updatedLibrarian =  await librarianModel.findByIdAndUpdate(_id,{...librarian,_id},{new:true})
        res.json(updatedLibrarian)
    }
}

module.exports.deleteLibrarian = () => {
    return async (req,res) => {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No librarian with that Id')
        await librarianModel.findByIdAndDelete(id)
        res.json({message:"Librarian deleted successfully !"})
    }
} 
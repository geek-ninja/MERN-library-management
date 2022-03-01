const mongoose = require('mongoose')
const issueModel = require('../models/booksIssueModel')

module.exports.getIssues = () => {
    return async (req,res) => {

        try {
            const issues = await issueModel.find().populate('student').populate('book')
            res.status(200).json(issues)
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }
}

module.exports.createIssue = () => {
    return async (req,res) => {
        const issue = req.body
        const newIssue = new issueModel(issue)
        try {
            await newIssue.save()
            res.status(201).json(newIssue)
        } catch (error) {
            res.status(409).json({message: error.message})
        }
    }
}

module.exports.deleteIssue = () => {
    return async (req,res) => {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No issue with that Id')
        await issueModel.findByIdAndDelete(id)
        res.json({message:"issue deleted successfully !"})
    }
}

module.exports.updateIssue = () => {
    return async (req,res) => {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No issue with that Id')
        const updatedIssue = await issueModel.findByIdAndUpdate(id,{issueStatus:true,issueDate:new Date()},{new:true})
        res.json(updatedIssue)
    }
}
module.exports.updateIssueReturned = () => {
    return async (req,res) => {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No issue with that Id')
        const updatedIssue = await issueModel.findByIdAndUpdate(id,{returned:true,returnDate:new Date()},{new:true})
        res.json(updatedIssue)
    }
}

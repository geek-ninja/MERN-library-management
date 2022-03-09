const mongoose = require('mongoose')
const issueModel = require('../models/booksIssueModel')
const studentModel = require('../models/studentModel')

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
        const issue = await issueModel.findById(id)
        console.log('student return',issue.issueFine)
        const updatedIssue = await issueModel.findByIdAndUpdate(id,{returned:true,returnDate:new Date()},{new:true})
        res.json(updatedIssue)
    }
}
module.exports.updateIssueReturnDate = () => {
    return async (req,res) => {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No issue with that Id')
        const updatedIssue = await issueModel.findByIdAndUpdate(id,{returnDate:new Date()},{new:true})
        res.json(updatedIssue)
    }
}

module.exports.updateIssueFine = () => {
    return async (req,res) => {
        const {id} = req.params
        const fine = req.body
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No issue with that Id')
        const updatedIssue = await issueModel.findByIdAndUpdate(id,{issueFine:fine.fineBal},{new:true})
        res.json(updatedIssue)
    }
}

// module.exports.librarianClearIssueFine = () => {
//     return async (req,res) => {
//         const {id} = req.params
//         if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No issue with that Id')
//         const updatedIssue = await issueModel.findByIdAndUpdate(id,{issueFine:0},{new:true})
//         res.json({updatedIssue})
//     }
// }

module.exports.clearIssueFine = () => {
    return async (req,res) => {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No issue with that Id')
        const issue = await issueModel.findById(id).populate('student')
        const fine = issue.issueFine
        const updatedStudent = await studentModel.findByIdAndUpdate(issue.student._id,{fineBal:issue.student.fineBal - fine})
        const updatedIssue = await issueModel.findByIdAndUpdate(id,{returned:true,issueFine:0},{new:true})
        res.json({updatedStudent,updatedIssue})
    }
}
const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type: String,
        required: true
    },
    roll:{
        type: String,
        required: true,
        unique: true
    },
    password : {
        type:String,
        required: true
    },
    authType: {
        type : String,
        default:"student"
    },
    fineBal:{
        type:Number,
        min:0,
        default:0
    }
})

module.exports = mongoose.model('student',studentSchema)
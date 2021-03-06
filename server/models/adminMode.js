const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required: true
    },
    authType:{
        type : String,
        default : 'admin'
    }
})

module.exports = mongoose.model('admin',adminSchema)
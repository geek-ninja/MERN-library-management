const mongoose = require('mongoose')

const librarianSchema = mongoose.Schema({
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
        default : 'librarian'
    }
})

module.exports = mongoose.model('librarian',librarianSchema)
const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title : {
        type:String,
        required:true
    },
    author : {
        type:String,
        required:true
    },
    img : {
        type:String,
        required:true
    },
    quantity : {
        type : Number,
        min : 0,
        default: 1
    }
})

module.exports = mongoose.model('books',bookSchema)
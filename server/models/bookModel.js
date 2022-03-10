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
        default: "https://www.m1homes.com/images/not-available.png",
        required:true
    },
    quantity : {
        type : Number,
        min : 0,
        default: 1
    }
})

module.exports = mongoose.model('books',bookSchema)
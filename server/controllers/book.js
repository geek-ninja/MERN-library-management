const mongoose = require('mongoose')
const bookModel = require('../models/bookModel')

module.exports.getBooks = () => {
    return async (req,res) => {
        try {
            const books = await bookModel.find()
            res.status(200).json(books)
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }
}

module.exports.createBook = () => {
    return async (req,res) => {
        const book = req.body
        const newBook = new bookModel(book)
        try {
            await newBook.save()
            res.status(201).json(newBook)
        } catch (error) {
            res.status(409).json({message: error.message})
        }
    }
}

module.exports.updateBook = () => {
    return async (req,res) => {
        const {id: _id} = req.params
        const book = req.body
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No book with that Id')
        const updatedBook =  await bookModel.findByIdAndUpdate(_id,{...book,_id},{new:true})
        res.json(updatedBook)
    }
}

module.exports.deleteBook = () => {
    return async (req,res) => {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No book with that Id')
        await bookModel.findByIdAndDelete(id)
        res.json({message:"book deleted successfully !"})
    }
}

module.exports.bookQuantity = () => {
    return async (req,res) => {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No book with that Id')
        const book = await bookModel.findById(id)
        const updatedBook = await bookModel.findByIdAndUpdate(id,{quantity:book.quantity + 1},{new:true})
        res.json(updatedBook)
    }
}
module.exports.bookQuantityRemove = () => {
    return async (req,res) => {
        const {id} = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No book with that Id')
        const book = await bookModel.findById(id)
        const updatedBook = await bookModel.findByIdAndUpdate(id,{quantity:`${book.quantity - 1 < 0?0:book.quantity - 1}`},{new:true})
        res.json(updatedBook)
    }
}
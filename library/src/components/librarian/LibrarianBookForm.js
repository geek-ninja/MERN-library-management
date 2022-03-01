import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createBooks } from '../../Action/bookAction'

function LibrarianBookForm() {

    const dispatch = useDispatch()
    const [bookData,setBookData] = useState({title:'',author:'',img:''})

    const clear = () => {
        setBookData({title: '',author : '' ,img: ''})
      }
    
      const addBook = (e) => {
        e.preventDefault()
        dispatch(createBooks(bookData))
        clear()
      }

  return (
    <div className='librarian_book_form'>
        <form onSubmit={addBook}>
            <TextField type = "text" required value={bookData.title} onChange = {(e) => setBookData({...bookData,title:e.target.value})} label="Title"/>
            <TextField type = "text" required value={bookData.author} onChange = {(e) => setBookData({...bookData,author:e.target.value})} label="Author"/>
            <FileBase type = "file" multiple = {false} onDone = {({base64}) => setBookData({...bookData,img: base64})}/>
            <Button type = "submit" variant="contained" color="primary">add</Button>
        </form>
    </div>
  )
}

export default LibrarianBookForm
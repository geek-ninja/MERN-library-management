import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createBooks } from '../../Action/bookAction'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function LibrarianBookForm() {

    const dispatch = useDispatch()
    const [bookData,setBookData] = useState({title:'',author:'',img:''})
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
  
    const useStyles = makeStyles((theme) => ({
      paper: {
        position: 'absolute',
        maxWidth:400,
        width: `${100}%`,
        backgroundColor: '#D4F2FD',
        border: '2px solid #20B283',
        borderRadius:'10px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }))
  const classes = useStyles();
  
  function getModalStyle() {
      const top = 50 
      const left = 50       
      return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
    }
    
  const handleOpen = () => {
      setOpen(true);
  }
  
  const handleClose = () => {
      setOpen(false);
  }
  
  const clear = () => {
    setBookData({title: '',author : '' ,img: ''})
  }

  const addBook = (e) => {
    e.preventDefault()
    dispatch(createBooks(bookData))
    clear()
    handleClose()
  }

  const body = (
  <div style={modalStyle} className={classes.paper}>
    <h2>Add Book</h2>
        <div className='librarian_book_form'>
        <form onSubmit={addBook}>
            <TextField type = "text" required value={bookData.title} onChange = {(e) => setBookData({...bookData,title:e.target.value})} label="Title"/>
            <TextField type = "text" required value={bookData.author} onChange = {(e) => setBookData({...bookData,author:e.target.value})} label="Author"/>
            &nbsp;
            <FileBase type = "file" multiple = {false} onDone = {({base64}) => setBookData({...bookData,img: base64})}/>
            &nbsp;
            <Button type = "submit" variant="contained" color="primary">add</Button>
        </form>
    </div>
  </div>
  )

  return (
    <div>
      <Button variant='contained' color = 'primary' size='large' onClick={handleOpen}>Add Book</Button>
      <Modal open={open} onClose={handleClose}>{body}</Modal>
    </div>
  )
}

export default LibrarianBookForm
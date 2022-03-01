import React, { useState } from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import {deleteBooks,bookQuantity, updateBooks, bookQuantityRemove} from '../../../Action/bookAction'
import FileBase from 'react-file-base64'
import DeleteIcon from '@material-ui/icons/Delete';
import SystemUpdateAlt from '@material-ui/icons/SystemUpdateAlt';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

function Book({book}) {

    const dispatch = useDispatch()

    const [bookData,setBookData] = useState({title:book.title,author: book.author,img : book.img })
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
  
    const useStyles = makeStyles((theme) => ({
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
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
  
  const update = async (e) => {
    e.preventDefault()
    dispatch(updateBooks(book._id,bookData))
    handleClose()
  }
  
  const body = (
  <div style={modalStyle} className={classes.paper}>
      <div className='student_update_form'>
          <form onSubmit={update}>
              <TextField type = "text" required value={bookData.title} onChange = {(e) => setBookData({...bookData,title:e.target.value})} label="Title"/>
              <TextField type = "text" required value={bookData.author} onChange = {(e) => setBookData({...bookData,author:e.target.value})} label="Author"/>
              <FileBase type = "file" multiple = {false} onDone = {({base64}) => setBookData({...bookData,img: base64})}/>
              <Button type = "submit" variant="contained" color="primary">update</Button>
          </form>
      </div>
  </div>
  )

  return (
    <div className='book'>
        <div className='book_details'>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <img src={book.img} alt = 'book'/>
            {/* <Button size = 'small' color = 'primary' onClick={() => setCurrId(book._id)}><MoreHorizIcon/> &nbsp; update &nbsp;</Button> */}
            <Button size = 'small' color = 'primary' onClick={() => dispatch(bookQuantity(book._id))}><AddShoppingCartIcon/></Button>
            &nbsp; Qty: &nbsp;{book.quantity} &nbsp;
            <Button size = 'small' color = 'primary' onClick={() => dispatch(bookQuantityRemove(book._id))}><RemoveShoppingCartIcon/></Button>
            <Button size = 'small' color = 'primary' onClick={handleOpen}><SystemUpdateAlt/> update</Button>
            <Modal open={open} onClose={handleClose}>{body}</Modal>
            <Button size = 'small' color = 'primary' onClick={() => dispatch(deleteBooks(book._id))}><DeleteIcon/>&nbsp; Delete &nbsp;</Button>
        </div>
    </div>
  )
}

export default Book
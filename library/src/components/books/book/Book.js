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
import CreateIcon from '@material-ui/icons/Create';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
function Book({book}) {

    const dispatch = useDispatch()

    const [bookData,setBookData] = useState({title:book.title,author: book.author,img : book.img })
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
            <img src={book.img} alt = 'book'/>
            <h2>{book.title}</h2>
            <p>~&nbsp;{book.author}</p>
            <div className='book_details_btn'>
              <div className='book_details_qty_btn'>
              <Button size = 'small' color = 'primary' onClick={() => dispatch(bookQuantity(book._id))}><AddCircleIcon/></Button>
              Qty: &nbsp;{book.quantity}
              <Button size = 'small' color = 'primary' onClick={() => dispatch(bookQuantityRemove(book._id))}><RemoveCircleIcon/></Button>
              </div>
              <div className='book_details_ud_btn'>
                <Button variant='contained' size = 'small' color = 'primary' onClick={handleOpen}><CreateIcon/>&nbsp; update &nbsp;</Button>
                &nbsp;
                <Modal open={open} onClose={handleClose}>{body}</Modal>
                <Button variant='contained' size = 'small' color = 'secondary' onClick={() => dispatch(deleteBooks(book._id))}><DeleteIcon/>&nbsp; Delete &nbsp;</Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Book
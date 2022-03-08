import React, { useState } from 'react'
import { FormControl, Select, MenuItem, Button} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import { useDispatch, useSelector } from 'react-redux'
import { createIssue } from '../../Action/issueAction';
import { bookQuantityRemove } from '../../Action/bookAction';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

function LibrarianBookAllot() {
    
    const dispatch = useDispatch()
    const [allotBook,setAllotBook] = useState('')
    const [allotStudent,setAllotStudent] = useState('')

    const students = useSelector((state) => state.student)
    const books = useSelector((state) => state.books)
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
        setAllotStudent('')
        setAllotBook('')
    }
    const allot = () =>{
        const allotRequest = {
            student:allotStudent,
            book:allotBook,
            request:true,
            issueStatus:true,
            issueDate : new Date()
        }
        dispatch(createIssue(allotRequest))
        dispatch(bookQuantityRemove(allotBook))
        clear()
        handleClose()
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className='allot_form'>
            <h1>Allot book to students</h1>
        <FormControl className='librarian_allot_formControl'>
        <InputLabel id='student-select' >Allot Students</InputLabel>
            <Select labelId='student-select' variant= "standard" color="secondary" onChange={(e) => setAllotStudent(e.target.value)} value = {allotStudent}>
                {
                    students.map((student) => (
                        <MenuItem value = {student._id}>{student.name}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
        <FormControl className='librarian_allot_formControl'>
        <InputLabel id='book-select' >Allot Books</InputLabel>
            <Select labelId='book-select' variant= "standard" color="secondary" onChange={(e) => setAllotBook(e.target.value)} value = {allotBook}>
                {
                    books.map((book) => (
                        <MenuItem value = {book._id}>{book.title} by {book.author}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={allot}>Allot</Button>
            </div>
        </div>
        )

  return (
    <div className='librarain_book_allot'>
        <Button variant='contained' color='primary' size='large' onClick={handleOpen}>Allot Book</Button>
        <Modal open={open} onClose={handleClose}>{body}</Modal>
    </div>
  )
}

export default LibrarianBookAllot
import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import {createLibrarian} from '../../Action/adminAction'
import {useDispatch} from 'react-redux'

function AdminLibrarian() {

    const dispatch = useDispatch()
    const [librarianData,setlibrarianData] = useState({name:'',password:''})
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
    const clear = () => {
        setlibrarianData({name:'',password:''})
      }
    const signup = async (e) => {
        e.preventDefault()
        dispatch(createLibrarian(librarianData))
        clear()
        handleClose()
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className='adminLibrarian'>
                <form onSubmit={signup}>
                    <TextField type = "text" required value={librarianData.name} onChange = {(e) => setlibrarianData({...librarianData,name:e.target.value})} label="Name"/>
                    <TextField type = "password" required value={librarianData.password} onChange={(e) => setlibrarianData({...librarianData,password:e.target.value})} label="Password"/>
                    <Button type = "submit" variant="contained" color="secondary">create</Button>
                </form>
            </div>
        </div>
    )
  return (
    <div className='adminLib'>
        <div className='adminLib_desc'></div>
        <div className='adminLib_btn'>
            <Button type="button" variant='contained' color='primary' size='large' onClick={handleOpen}>create librarian</Button>
            <Modal open={open} onClose={handleClose}>{body}</Modal>
        </div>
    </div>
  )
}

export default AdminLibrarian

import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react'
import {createStudent} from '../../Action/adminAction'
import {useDispatch} from 'react-redux'

function AdminStudent() {    
    const dispatch = useDispatch()
    const [studentData,setStudentData] = useState({name:'',email:'',roll:'',password:''})
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
        setStudentData({name:'',email:'',roll:'',password:''})
      }
    const signup = async (e) => {
        e.preventDefault()
        dispatch(createStudent(studentData))
        clear()
        handleClose()
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <div className='adminStudent'>
                <form onSubmit={signup}>
                    <TextField type = "text" required value={studentData.name} onChange = {(e) => setStudentData({...studentData,name:e.target.value})} label="Name"/>
                    <TextField type = "email" required value={studentData.email} onChange={(e) => setStudentData({...studentData,email:e.target.value})} label="Email"/>
                    <TextField type = "text" required value={studentData.roll} onChange={(e) => setStudentData({...studentData,roll:e.target.value})} label="Roll"/>
                    <TextField type = "password" required value={studentData.password} onChange={(e) => setStudentData({...studentData,password:e.target.value})} label="Password"/>
                    <Button type = "submit" variant="contained" color="secondary">create</Button>
                </form>
            </div>
        </div>
    )

  return (
    <div className='adminStudent'>
        <div className='adminStudent_desc'></div>
        <div className='adminStudent_btn'>
            <Button type="button" variant='contained' color='primary' size='large' onClick={handleOpen}>create student</Button>
            <Modal open={open} onClose={handleClose}>{body}</Modal>
        </div>
    </div>
  )
}

export default AdminStudent
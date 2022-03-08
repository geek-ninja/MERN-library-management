import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { loginStudent } from '../../Action/studentAction';
import './student.css'
import formImg from '../../IMG/library_form.png'
import AdminStudent from '../admin/AdminStudent';

function StudentForm() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [studentData,setStudentData] = useState({roll:'',password:''})
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const auth = useSelector((state) => state.auth)
  useEffect(() => {
    if(auth.length > 0 && auth[0].data.authType === 'student'){
      navigate('/student')
    } 
  },[auth])

  const useStyles = makeStyles((theme) => ({
      paper: {
        position: 'absolute',
        width: 400,
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
    setStudentData({roll:'',password:''})
  }

  const login = async (e) => {
    e.preventDefault()
    dispatch(loginStudent(studentData))
    clear()
    handleClose()
  }

  const body = (
  <div style={modalStyle} className={classes.paper}>
      <div className='studentAuth'>
        <div className='studentAuth_welcome'>
          <img src={formImg} alt = 'form img'/>
          <h2>Student Panel</h2>
        </div>
          <form onSubmit={login}>
              <TextField type = "text" required value={studentData.roll} onChange = {(e) => setStudentData({...studentData,roll:e.target.value})} label="Student Roll"/>
              <TextField type = "password" required value={studentData.password} onChange={(e) => setStudentData({...studentData,password:e.target.value})} label="Password"/>
              <Button type = "submit" variant="contained" color="primary">login</Button>
          </form>
          <div className='student_signup'>
            <p>Don't have an account ?</p>
             <AdminStudent/>
          </div>
      </div>
  </div>
  )
  
  return (
    <div className='student_form'>
      <button type="button" onClick={handleOpen}>Student Panel</button>
      <Modal open={open} onClose={handleClose}>{body}</Modal>
    </div>
  )
}

export default StudentForm
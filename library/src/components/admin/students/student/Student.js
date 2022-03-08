import React, { useState } from 'react'
import { deleteStudent, updateStudent } from '../../../../Action/adminAction'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

function Student({student}) {

  const [studentData,setStudentData] = useState({name:student.name,email: student.email,roll : student.roll ,password: student.password})
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      maxWidth: 400,
      width:'100%',
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
  dispatch(updateStudent(student._id,studentData))
  handleClose()
}

const body = (
<div style={modalStyle} className={classes.paper}>
    <div className='student_update_form'>
        <form onSubmit={update}>
            <TextField type = "text" required value={studentData.name} onChange = {(e) => setStudentData({...studentData,name:e.target.value})} label="Name"/>
            <TextField type = "email" required value={studentData.email} onChange = {(e) => setStudentData({...studentData,email:e.target.value})} label="Email"/>
            <TextField type = "text" required value={studentData.roll} onChange = {(e) => setStudentData({...studentData,roll:e.target.value})} label="Roll"/>
            <TextField type = "password" required value={studentData.password} onChange={(e) => setStudentData({...studentData,password:e.target.value})} label="Password"/>
            <Button type = "submit" variant="contained" color="primary">update</Button>
        </form>
    </div>
</div>
)

  return (
    <tr className='student'>
      <td>{student.roll}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td><Button size = 'large' variant='text' color = 'primary' onClick={handleOpen}><CreateIcon fontSize='large'/></Button></td>
      <Modal open={open} onClose={handleClose}>{body}</Modal>
      <td><Button size = 'large' variant = "text" color = 'secondary' onClick={() => dispatch(deleteStudent(student._id))}><DeleteIcon fontSize='large'/></Button></td>  
    </tr>    
  )
}

export default Student
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
    const clear = () => {
        setlibrarianData({name:'',password:''})
    }
    
    const formValid = (fieldName,fieldValue) => {
      switch (fieldName) {   
        case 'username':
          const usernameValid = fieldValue.length > 0
          if(!usernameValid){window.alert('invalid username')}
          return usernameValid

        case 'email':
          const emailValid = fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          const validRes = emailValid ?  true :  false
          if(!validRes){window.alert('invalid email')}
          return validRes
        
        case 'password':
          const passwordValid = fieldValue.length >= 8
          if(!passwordValid){window.alert('invalid password , min password length is 8')}
          return passwordValid
        
        default:
          break;
      }
    }

    const signup = async (e) => {
        e.preventDefault()
        if(formValid('username',librarianData.name) && formValid('password',librarianData.password)){
          dispatch(createLibrarian(librarianData))
          window.alert('user created !')
        }
        else{
          window.alert('Invalid Input')
        }
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
        <div className='adminLib_btn'>
            <Button type="button" variant='contained' color='primary' size='large' onClick={handleOpen}>create librarian</Button>
            <Modal open={open} onClose={handleClose}>{body}</Modal>
        </div>
    </div>
  )
}

export default AdminLibrarian
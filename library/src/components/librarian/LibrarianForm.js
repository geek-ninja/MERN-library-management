import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {loginLibrarian} from '../../Action/librarianAction'
import './librarian.css'
import formImg from '../../IMG/library_form.png'

function LibrarianForm() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [librarianData,setLibrarianData] = useState({name:'',password:''})
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const auth = useSelector((state) => state.auth)
  useEffect(() => {
    if(auth.length > 0 && auth[0].data.authType === 'librarian'){
      navigate('/librarian')
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
    setLibrarianData({name:'',password:''})
  }

  const login = async (e) => {
    e.preventDefault()
    dispatch(loginLibrarian(librarianData))
    clear()
    handleClose()
  }

  const body = (
  <div style={modalStyle} className={classes.paper}>
      <div className='librarianAuth'>
      <div className='librarianAuth_welcome'>
          <img src={formImg} alt = 'form img'/>
          <h2>Librarian Panel</h2>
        </div>
          <form onSubmit={login}>
              <TextField type = "text" required value={librarianData.name} onChange = {(e) => setLibrarianData({...librarianData,name:e.target.value})} label="Name"/>
              <TextField type = "password" required value={librarianData.password} onChange={(e) => setLibrarianData({...librarianData,password:e.target.value})} label="Password"/>
              <Button type = "submit" variant="contained" color="primary">login</Button>
          </form>
      </div>
  </div>
  )
  
  return (
    <div className='librarian_form'>
        <button type="button" onClick={handleOpen}>Librarian Panel</button>
        <Modal open={open} onClose={handleClose}>{body}</Modal>
    </div>
  )
}

export default LibrarianForm
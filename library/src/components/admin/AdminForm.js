import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {loginAdmin} from '../../Action/adminAction'
import { useDispatch,useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import formImg from '../../IMG/library_form.png'

function AdminForm() {
      
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [adminData,setAdminData] = useState({name:'',password:''})
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const auth = useSelector((state) => state.auth)
    useEffect(() => {
      if(auth.length > 0 && auth[0].data.authType === 'admin'){
        navigate('/admin')
      }
    },[auth])
    
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
      setAdminData({name:'',password:''})
    }

    const login = async (e) => {
      e.preventDefault()
      dispatch(loginAdmin(adminData))
      clear()
      handleClose()
    }

    const body = (
    <div style={modalStyle} className={classes.paper}>
        <div className='adminAuth'>
          <div className='adminAuth_welcome'>
            <img src={formImg} alt = 'form img'/>
            <h2>Admin Panel</h2>
          </div>
            <form onSubmit={login}>
                <TextField type = "text" required value={adminData.name} onChange = {(e) => setAdminData({...adminData,name:e.target.value})} label="Name"/>
                <TextField type = "password" required value={adminData.password} onChange={(e) => setAdminData({...adminData,password:e.target.value})} label="Password"/>
                <Button type = "submit" variant="contained" color="primary">login</Button>
            </form>
        </div>
    </div>
    )

  return (
    <div className='adminForm'>
        <button type="button" onClick={handleOpen}>Admin Panel</button>
        <Modal open={open} onClose={handleClose}>{body}</Modal>
    </div>
  )
}

export default AdminForm
import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { deleteLibrarian, updateLibrarian } from '../../../../Action/adminAction';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

function Librarian({librarian}) {

    const [librarianData,setLibrarianData] = useState({name:librarian.name,password: librarian.password})
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
      dispatch(updateLibrarian(librarian._id,librarianData))
      handleClose()
    }
    
    const body = (
    <div style={modalStyle} className={classes.paper}>
        <div className='librarian_update_form'>
          <h1>update librarian</h1>
            <form onSubmit={update}>
                <TextField type = "text" required value={librarianData.name} onChange = {(e) => setLibrarianData({...librarianData,name:e.target.value})} label="Name"/>
                <TextField type = "password" required value={librarianData.password} onChange={(e) => setLibrarianData({...librarianData,password:e.target.value})} label="Password"/>
                <Button type = "submit" variant="contained" color="primary">update</Button>
            </form>
        </div>
    </div>
    )


  return (
    <tr className='librarian'>
      <td>{librarian.name}</td>
      <td><Button size = 'large' variant='text' color = 'primary' onClick={handleOpen}><CreateIcon fontSize='large'/></Button></td>
      <Modal open={open} onClose={handleClose}>{body}</Modal>
      <td><Button size = 'large' variant='text' color = 'secondary' onClick={() => dispatch(deleteLibrarian(librarian._id))}><DeleteIcon fontSize='large'/> </Button></td>
    </tr>
  )
}

export default Librarian
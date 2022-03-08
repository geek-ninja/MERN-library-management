import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import LibrarianNav from './LibrarianNav'
import './nav.css'
import StudentNav from './StudentNav'
import {useSelector , useDispatch} from 'react-redux'
import { Button } from '@material-ui/core';
import { logoutAdmin } from '../../Action/adminAction'
import {useNavigate} from 'react-router-dom'
import jwt_decode from "jwt-decode";

function Nav() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user,setUser] = useState('')
  
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if(token === null || token === undefined){
      setUser({})
      navigate('/')
    }
    else{
      const authUser = jwt_decode(token)
      setUser(authUser)
    }
    try {
      if(auth[0] !== undefined && auth.length !== 0){
        setUser(auth[0])
      }
    } catch (error) {
      console.log(error)
    }
  },[auth])

  const logout = (e) => {
    e.preventDefault()
    localStorage.clear('token')
    dispatch(logoutAdmin())
    navigate('/')
  }

  return (
    <div className='nav'>
        <div className='nav_logo'>
          <img src = 'https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2021/11/11/ml-6271-image011.png' alt='logo'/>
        </div>
        <div className='nav_user'>
          <h2>Welcome &nbsp;{`${user.login ? user.data.name:'to library'}`}</h2>
        </div>
        <div className='nav_menu'>
          {
            user.login ? 
            <Button variant='contained' color='secondary' onClick={logout}>Logout</Button>
            :
            <Button variant='contained' color='primary'>Login below</Button>
          }
        </div>
    </div>
  )
}

export default Nav
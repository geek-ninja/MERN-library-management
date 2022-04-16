import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLibrarians, getStudents } from '../../Action/adminAction'
import AdminLibrarian from './AdminLibrarian'
import AdminStudent from './AdminStudent'
import Librarians from './librarians/Librarians'
import Students from './students/Students'
import './admin.css'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

function Admin() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    const authUser = jwt_decode(token)
    if(token === null || token === undefined || authUser.data.authType != 'admin'){
      navigate('/')
    }
    else{
      dispatch(getStudents())
      dispatch(getLibrarians())
    }
    // restiction with auther ....................... 
  },[dispatch])


  return (

    <div className='admin'>
      <div className='admin_dashboard'>
        <div className='admin_dashboard_student'>
          <AdminStudent/>
          <h2>Student list</h2>
          <Students/>
        </div>
        <div className='admin_dashboard_librarian'>
          <AdminLibrarian/>
          <h2>librarian list</h2>
          <Librarians/>
        </div>
      </div>
    </div>
  )
}

export default Admin
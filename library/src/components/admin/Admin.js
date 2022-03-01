import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLibrarians, getStudents } from '../../Action/adminAction'
import AdminLibrarian from './AdminLibrarian'
import AdminStudent from './AdminStudent'
import Librarians from './librarians/Librarians'
import Students from './students/Students'
import './admin.css'

function Admin() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStudents())
    dispatch(getLibrarians())
  },[dispatch])


  return (
    <div className='admin'>
      <div className='admin_create'>
        <AdminStudent/>
        <AdminLibrarian/>
      </div>
      <div className='admin_dashboard'>
        <h1>Dashboard</h1>
        <div className='admin_dashboard_student'>
          <h2>Student list</h2>
          <Students/>
        </div>
        <div className='admin_dashboard_librarain'>
          <h2>librarian list</h2>
          <Librarians/>
        </div>
      </div>
    </div>
  )
}

export default Admin
import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getStudents } from '../../Action/adminAction'
import { getBooks } from '../../Action/bookAction'
import { getIssues } from '../../Action/issueAction'
import AdminStudent from '../admin/AdminStudent'
import Books from '../books/Books'
import Issues from './issues/Issues'
import LibrarianBookAllot from './LibrarianBookAllot'
import LibrarianBookForm from './LibrarianBookForm'
import {FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import ListIcon from '@material-ui/icons/List';
import CancelIcon from '@material-ui/icons/Cancel';
import jwt_decode from "jwt-decode";
function Librarian() {
  
  const [toggle,setToggle] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    const authUser = jwt_decode(token)
    if(token === null || token === undefined || authUser.data.authType != 'librarian'){
      navigate('/')
    }
    else{
      dispatch(getBooks())
      dispatch(getIssues())
      dispatch(getStudents())
    }
  },[dispatch])

  const dropDown = () => {
    setToggle(!toggle)
    document.getElementById('min_nav').style.display = 'flex'
  }
  const dropDownClose = () => {
    setToggle(!toggle)
    document.getElementById('min_nav').style.display = 'none'
  }

  return (
    <div className = 'librarian'>
      <div className='librarian_nav_dropdown'>
        <div className='nav_btn'>
        {
          toggle? 
          <Button variant='text' color='secondary' onClick={dropDownClose}><CancelIcon fontSize='large'/></Button> 
          : 
          <Button variant="text" color='primary' onClick={dropDown}><ListIcon fontSize='large' color = "primary"/></Button>
        }
        </div>
        <div className='min_nav' id='min_nav'>
          <div className='librarian_student_create'>
            <AdminStudent/>
          </div>
          <div className='librarian_book_allot_form'>
            <LibrarianBookAllot/>
          </div>
          <div className='librarian_book_form'>
            <LibrarianBookForm/>
          </div>
          <div className='librarian_book_issues'>
              <Button variant='contained' color='primary' size='large' ><Link to='request'>Book Requests</Link></Button>
          </div>
      </div>
      </div>
      <div className='librarian_nav' id = 'librarian_nav'>
        <div className='librarian_student_create'>
          <AdminStudent/>
        </div>
        <div className='librarian_book_allot_form'>
          <LibrarianBookAllot/>
        </div>
        <div className='librarian_book_form'>
          <LibrarianBookForm/>
        </div>
        <div className='librarian_book_issues'>
            <Button variant='contained' color='primary' size='large' ><Link to='request'>Book Requests</Link></Button>
        </div>
      </div>
      <div className='librarian_book_allot_dashboard'>
        <div className='librarian_book_list'>
          <Books/>
        </div>
      </div>
    </div>
  )
}

export default Librarian
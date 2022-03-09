import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
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

function Librarian() {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getBooks())
    dispatch(getIssues())
    dispatch(getStudents())
  },[dispatch])

  return (
    <div className = 'librarian'>
      <div className='librarian_nav'>
        <AdminStudent/>
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
      <div className='librarian_nav_dropdown'>
          <FormControl className='nav_form'>
          <InputLabel id='nav' ><ListIcon fontSize='large' color = "primary"/></InputLabel>
          <Select className='nav_select' variant = "standard" labelId='nav'>
            <MenuItem><LibrarianBookAllot/></MenuItem>
            <MenuItem><LibrarianBookForm/></MenuItem>
            <MenuItem><Button variant='contained' color='primary' size='large' ><Link to='request'>Book Requests</Link></Button></MenuItem>
          </Select>
          </FormControl>
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
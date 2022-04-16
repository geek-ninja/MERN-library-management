import { Button } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../Action/bookAction'
import { getIssues } from '../../Action/issueAction'
import Books from './Books/Books'
import Issues from './issues/Issues'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

function Student() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [student,setStudent] = useState(null)

  useEffect(() => {
    
    const token = JSON.parse(localStorage.getItem('token'))
    const userAuth = jwt_decode(token)
    console.log(userAuth)

    if(token === null || token === undefined || userAuth.data.authType != 'student'){
      navigate('/')
    }
    else{
      setStudent(userAuth.data)
      dispatch(getIssues())
      dispatch(getBooks())
    }
  },[dispatch])

  // const student = useSelector((state) => state.auth)

  return (
    <div className='student'>
      <div className='student_issue'>
        <Issues currStudent = {student}/>
      </div>
      {/* <div className='student_books'>
        <Books/>
      </div> */}
    </div> 
  )
}

export default Student
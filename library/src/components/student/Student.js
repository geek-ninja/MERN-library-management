import { Button } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../Action/bookAction'
import { getIssues } from '../../Action/issueAction'
import Books from './Books/Books'
import Issues from './issues/Issues'

function Student() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getIssues())
    dispatch(getBooks())
  },[dispatch])

  const student = useSelector((state) => state.auth)

  return (
    <div className='student'>
      <div className='student_issues'>
        <Issues currStudent = {student[0]}/>
      </div>
      <div className='student_books'>
        <Books/>
      </div>
    </div> 
  )
}

export default Student
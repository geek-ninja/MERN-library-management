import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { filterIssue, getIssues } from '../../../Action/issueAction'
import Issue from './issue/Issue'
import { fetchIssues } from '../../../api/issue'
import { CircularProgress } from '@material-ui/core'

function Issues({currStudent}) {

  // const issues = useSelector((state) => state.issue.filter((issue) => issue.student._id === currStudent.data._id))

  const [issues,setIssues] = useState([])
  useEffect(() => {
    fetchIssues().then((res) => setIssues(res.data))
  },[issues])
  
  return (
    <div className='student_issues'>
      <h2>my requests</h2>
      <table>
        <tr>
          <th>book</th>
          <th>author</th>
          <th>student</th>
          <th>roll</th>
          <th>issue date</th>
          <th>due date</th>
          <th>return date</th>
          <th>fine </th>
          <th>total fine</th>
          <th>issue status</th>
        </tr>
          {
              !issues?.length?
              <div>
                <h2>No Book Request yet ..</h2>
                <CircularProgress/>
              </div>
              : 
              issues.map((issue) => (
                  currStudent?._id === issue?.student?._id ? <Issue issue = {issue}/>:''
                // <Issue issue = {issue} currStudent = {currStudent}/>
              ))
          }
      </table>
    </div>
  )
}

export default Issues
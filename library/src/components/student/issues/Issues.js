import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { filterIssue, getIssues } from '../../../Action/issueAction'
import Issue from './issue/Issue'
import { fetchIssues } from '../../../api/issue'

function Issues({currStudent}) {

  // const issues = useSelector((state) => state.issue.filter((issue) => issue.student._id === currStudent.data._id))

  const [issues,setIssues] = useState([])
  useEffect(() => {
    fetchIssues().then((res) => setIssues(res.data))
  },[issues])

  return (
    <div className='issues'>
      <h1>welcome {currStudent.data.name}</h1>
        {
        <div className='issues_list'>
            {
                issues.map((issue) => (
                   currStudent.data._id === issue.student._id ? <Issue issue = {issue}/>:''
                  // <Issue issue = {issue} currStudent = {currStudent}/>
                ))
            }
        </div>
        }
    </div>
  )
}

export default Issues
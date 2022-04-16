import { CircularProgress } from '@material-ui/core'
import jwt_decode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchIssues } from '../../../api/issue'
import Issue from './issue/Issue'

function Issues() {

    const [issues,setIssues] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      const token = JSON.parse(localStorage.getItem('token'))
      const authUser = jwt_decode(token)
      if(token === null || token === undefined || authUser.data.authType != 'librarian'){
        navigate('/')
      }
      else{
        fetchIssues().then((res) => setIssues(res.data))
      }
    },[issues])

    // const issues = useSelector((state) => state.issue)

    return (
    <div className='lib_issues'>
        <div className='lib_issues_header'>
            <h2>book requests</h2>
        </div>
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
          <th>total fine </th>
          <th>issue status</th>
          <th>fine check</th>
        </tr>
        {
            !issues.length ?
            <div>
                <h2>No Book Request yet ..</h2>
                <CircularProgress/>
            </div> 
            :                
                issues.map((issue,index) => (<Issue issue = {issue} index = {index}/>))
        }

        </table>
    </div>
    
  )
}

export default Issues
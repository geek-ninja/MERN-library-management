import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchIssues } from '../../../api/issue'
import Issue from './issue/Issue'

function Issues() {

    const [issues,setIssues] = useState([])
    useEffect(() => {
      fetchIssues().then((res) => setIssues(res.data))
    },[issues])

    // const issues = useSelector((state) => state.issue)

    return (
    <div className='issues'>
        <div className='issues_header'>
            <h2>pending book requests</h2>
        </div>
        {
            !issues.length ?
            <div>
                <h2>No Book Request yet ..</h2>
                <CircularProgress/>
            </div> 
            :
            (
                <div className='issues_list'>
                    {
                        issues.map((issue) => (<Issue issue = {issue}/>))
                    }
                </div>
            )
        }
    </div>
    
  )
}

export default Issues
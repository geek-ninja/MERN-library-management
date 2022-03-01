import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import {updateIssue} from '../../../../Action/issueAction'
function Issue({issue}) {

    const dispatch = useDispatch()

  return (
    <div className='issue'>
        <div className='issue_details'>
            {
                issue.returned?
                ''
                :
                <div>
                    <p>{issue.book.title} | {issue.book.author} | {issue.student.name}</p>
                    {
                        !issue.issueStatus? 
                        <Button variant='contained' color='secondary' onClick={() => dispatch(updateIssue(issue._id))}>Accept</Button>
                        :
                        <Button variant='contained' color='primary'> Accepted</Button>
                    }
                </div>
            }
        </div>
    </div>
  )
}

export default Issue
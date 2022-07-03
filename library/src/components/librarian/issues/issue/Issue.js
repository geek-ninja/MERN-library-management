import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { bookQuantity } from '../../../../Action/bookAction'
import { issueFineClear, updateIssue} from '../../../../Action/issueAction'
import moment from 'moment'

function Issue({issue,index}) {

    const [studentIssueDate,setStudentIssueDate] = useState(undefined)
    const [dueDate,setDueDate] = useState(undefined)
    const [returnDate,setReturnDate] = useState(undefined)

    const dispatch = useDispatch()
    const clearFine = (e) => {
        e.preventDefault()
        dispatch(issueFineClear(issue._id))
        dispatch(bookQuantity(issue.book._id))
    }

    useEffect(() => {
        if((issue.issueDate !== undefined) && (issue.issueDate !== null)){
          setStudentIssueDate(moment(issue.issueDate).format('DD-MM-YYYY'))
          setDueDate(moment(issue.issueDate).add(7,'d').format('DD-MM-YYYY'))
        }
        if((issue.returnDate !== undefined) && (issue.returnDate)){
          setReturnDate(moment(issue.returnDate).format('DD-MM-YYYY'))
        }
      },[issue])

    return (
        // issue.returned?
        // ''
        // :
        <tr>
            <td>{issue?.book?.title}</td>
            <td>{issue?.book?.author}</td>
            <td>{issue?.student?.name}</td>
            <td>{issue.student?.roll}</td>
            <td>{studentIssueDate}</td>
            <td>{dueDate}</td>
            <td>{returnDate}</td>
            <td>{issue?.issueFine}</td>
            <td>{issue?.student?.fineBal}</td>
            {
                !issue?.issueStatus? 
                <td><Button variant='contained' color='secondary' onClick={() => dispatch(updateIssue(issue?._id))}>Accept</Button></td>
                :
                <td><Button variant='contained' color='primary'>Accepted</Button></td>
            }
            {
                issue?.issueFine > 0?<td><Button variant='contained' color='secondary' onClick={clearFine}>Clear Fine</Button></td>:<td><Button variant='contained' color='primary'>NIL</Button></td>
            }
        </tr>
  )
}

export default Issue
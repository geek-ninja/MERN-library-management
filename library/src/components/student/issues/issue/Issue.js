import React, { useEffect, useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteIssue, getIssues, updateIssueReturned } from '../../../../Action/issueAction'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import { bookQuantity, getBooks } from '../../../../Action/bookAction'
import moment from 'moment'

function Issue({issue}) {
    
  
    const dispatch = useDispatch()

    const [studentIssueDate,setStudentIssueDate] = useState(undefined)
    const [dueDate,setDueDate] = useState(undefined)
    const [returnDate,setReturnDate] = useState(undefined)

    useEffect(() => {
      if((issue.issueDate !== undefined) && (issue.issueDate !== null)){
        setStudentIssueDate(moment(issue.issueDate).format('DD-MM-YYYY'))
        setDueDate(moment(issue.issueDate).add(7,'d').format('DD-MM-YYYY'))
      }
      if((issue.returnDate !== undefined) && (issue.returnDate)){
        setReturnDate(moment(issue.returnDate).format('DD-MM-YYYY'))
      }
    },[issue])

    const returnBook = (e) => {
      e.preventDefault()
      dispatch(updateIssueReturned(issue._id))
      dispatch(bookQuantity(issue.book._id))
    }
    const cancelBook = (e) => {
      e.preventDefault()
      dispatch(deleteIssue(issue._id))
      dispatch(bookQuantity(issue.book._id))
    }

  return (
    <div className='issue'>
        <div className='issue_details'>
          {
            issue.returned ?'':
            <div>
              {/* issue date : {moment(issue.issueDate).format('DD-MM-YYYY')} |  due date :  {moment(issue.issueDate).add(7,'d').format('DD-MM-YYYY')} | return date : {moment(issue.returnDate).format('DD-MM-YYYY')} */}
            <p>{issue.book.title} | {issue.book.author} | {issue.book.title} | {issue.student.name} | issueDate : {studentIssueDate} | dueDate : {dueDate} | return Date : {returnDate}</p>
              {issue.request && issue.issueStatus? 
                <Button variant='contained' color='secondary' onClick={returnBook}>return</Button>
                : 
                <div>
                  <Button variant='contained' color='secondary'>Pending ...</Button>
                  <Button size = 'small' color = 'primary' onClick={cancelBook}><DeleteIcon/>&nbsp; cancel &nbsp;</Button>
                </div>
              }
            </div>
          }
        </div>
    </div>
  )
}

export default Issue
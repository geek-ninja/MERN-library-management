import React, { useEffect, useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteIssue, getIssues, issueFineClear, updateIssueFine, updateIssueReturnDate, updateIssueReturned } from '../../../../Action/issueAction'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import { bookQuantity, getBooks } from '../../../../Action/bookAction'
import moment from 'moment'
import { getStudentFine } from '../../../../Action/studentAction'

function Issue({issue}) {
    
  
    const dispatch = useDispatch()

    const [studentIssueDate,setStudentIssueDate] = useState(undefined)
    const [dueDate,setDueDate] = useState(undefined)
    const [returnDate,setReturnDate] = useState(undefined)
    const [checkFine,setCheckFine] = useState(false)

    useEffect(() => {
      if((issue?.issueDate !== undefined) && (issue?.issueDate !== null)){
        setStudentIssueDate(moment(issue?.issueDate).format('DD-MM-YYYY'))
        setDueDate(moment(issue?.issueDate).add(7,'d').format('DD-MM-YYYY'))
      }
      if((issue?.returnDate !== undefined) && (issue?.returnDate)){
        setReturnDate(moment(issue?.returnDate).format('DD-MM-YYYY'))
      }
    },[issue])

    // const payFine = (e) => {
    //   e.preventDefault()
    //   dispatch(issueFineClear(issue._id))
    //   dispatch(bookQuantity(issue.book._id))
    // }

    const returnBook = (e) => {
      e.preventDefault()
      let f_issueDate = moment(issue?.issueDate)
      let f_returnDate = moment(new Date()).add('days',9)
      let check_fine = f_returnDate.diff(f_issueDate,'days')
      if(check_fine > 7){
        window.alert('clear your due fines !!')
        setCheckFine(true)
        const studentFine = {
          fineBal:(check_fine - 7)*2

        }
        dispatch(getStudentFine(issue?.student?._id,studentFine))
        dispatch(updateIssueFine(issue?._id,studentFine))
        dispatch(updateIssueReturnDate(issue?._id))
      }
      else{
        dispatch(updateIssueReturned(issue?._id))
        dispatch(bookQuantity(issue?.book?._id))
      }
    }
    
    const cancelBook = (e) => {
      e.preventDefault()
      dispatch(deleteIssue(issue?._id))
      dispatch(bookQuantity(issue?.book?._id))
    }

  return (


            issue?.returned ?'':
            <tr>
              <td>{issue?.book?.title}</td>
              <td>{issue?.book?.author}</td>
              <td>{issue?.student?.name}</td>
              <td>{issue?.student?.roll}</td>
              <td>{studentIssueDate}</td>
              <td>{dueDate}</td>
              <td>{returnDate}</td>
              <td>{issue?.issueFine}</td>
              <td>{issue?.student?.fineBal}</td>
              {issue?.request && issue?.issueStatus? 
                <td>
                  {
                    checkFine ? 
                    <Button variant='contained' color = 'secondary'>fine !</Button>
                    :
                    <Button variant='contained' color='primary' onClick={returnBook}>return</Button>
                  }
                </td>
                : 
                <td>
                  <Button variant='contained'  size = 'small' color = 'secondary'>Pending ...</Button>&nbsp;
                  <Button variant= 'contained' size = 'small' color = 'primary' onClick={cancelBook}><DeleteIcon/>&nbsp; cancel &nbsp;</Button>
                </td>
              }
            </tr>
          
  )
}

export default Issue

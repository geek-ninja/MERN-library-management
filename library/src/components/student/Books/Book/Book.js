import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { createIssue, getIssues } from '../../../../Action/issueAction'
import { bookQuantityRemove, getBooks } from '../../../../Action/bookAction'
import Issues from '../../issues/Issues'

function Book({book,currStudent}) {
    
    const dispatch = useDispatch()
    const [bookReqBtn,setBookReqBtn] = useState(false)
    // const [requestBtn,setRequestBtn] = useState(false)

    const requestIssue = (event,book,currStudent) => {
        
        event.preventDefault()
        // setRequestBtn(true)
        const issueReq = {
            student: currStudent._id,
            book: book._id,
            request:true,
            issueStatus: false,
            returned : false
        }
        dispatch(createIssue(issueReq))
        dispatch(bookQuantityRemove(book._id))
        setBookReqBtn(!bookReqBtn)
        
    }
  
  return (
    <div className='book'>
        <div className='book_details'>
            <h2>{book.title}</h2>
            <p>~ {book.author}</p>
            <img src={book.img} alt = 'book'/>
            <p>Qty : {book.quantity}</p>
            {
                book.quantity > 0 ? 
                <div>
                    {
                        <Button variant='contained'  color='primary' onClick={(event) => requestIssue(event, book,currStudent)}>request</Button>
                    }
                </div>
                :
                <Button variant='contained' color='secondary'>Book Not Available</Button>
            }
        </div>
    </div>
  )
}

export default Book
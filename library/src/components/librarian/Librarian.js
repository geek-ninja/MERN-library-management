import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../Action/bookAction'
import { getIssues } from '../../Action/issueAction'
import Books from '../books/Books'
import Issues from './issues/Issues'
import LibrarianBookForm from './LibrarianBookForm'

function Librarian() {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getBooks())
    dispatch(getIssues())
  },[dispatch])

  return (
    <div className = 'librarian'>
      <div className='librarian_book_list'>
        <Books/>
      </div>
      <div className='librarian_book_form'>
        <LibrarianBookForm/>
      </div>
      <div className='librarian_book_issues'>
        <Issues/>
      </div>
    </div>
  )
}

export default Librarian
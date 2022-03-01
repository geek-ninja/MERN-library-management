import React, { useEffect, useState } from 'react'
import {CircularProgress} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import Book from './Book/Book'
import Issues from '../issues/Issues'
import { getIssues } from '../../../Action/issueAction'
import { fetchBooks } from '../../../api/books'

function Books() {

    // const books = useSelector((state) => state.books)
    const [books,setBooks] = useState([])
    const student = useSelector((state) => state.auth)
    
    useEffect(() => {
        fetchBooks().then((res) => setBooks(res.data))
    },[books])

  return (
    <div className='books'>
        
        {
            !books.length ? <CircularProgress/>:(
                <div className='books_list'>
                    {
                        books.map((book) => (
                            <Book book = {book} currStudent = {student[0]}/>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default Books
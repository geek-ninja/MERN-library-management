import React, { useEffect, useState } from 'react'
import {Button, CircularProgress} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import Book from './Book/Book'
import Issues from '../issues/Issues'
import { getIssues } from '../../../Action/issueAction'
import { fetchBooks } from '../../../api/books'
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import { getBooks } from '../../../Action/bookAction'

function Books() {

    const dispatch = useDispatch()
    const books = useSelector((state) => state.books)
    const navigate = useNavigate()
    // const [books,setBooks] = useState([])
    const [user,setUser] = useState('')
    const [bookSearch,setBookSearch] = useState('')
    const student = useSelector((state) => state.auth)
    

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        const authUser = jwt_decode(token)
        // console.log(authUser.data.authType)
        if(token === null || token === undefined || authUser.data.authType != 'student'){
        navigate('/')
        }
        else{
        setUser(authUser)
        }
        // fetchBooks().then((res) => setBooks(res.data))
        dispatch(getBooks())
    },[dispatch,books])

  return (
      <div className='student_books'>
        <div className='books'>
            <Button variant='contained' color='primary'><Link to='request'>My requests</Link></Button>
            <div className='books_search'>
                <div className='books_search_input'>
                    <SearchIcon/>
                    <input type = 'text' placeholder='search book' value={bookSearch} onChange={(e) => setBookSearch(e.target.value)}/>
                </div>
            </div>
        
        {
            !books.length ? <CircularProgress/>:(
                <div className='student_book_list'>
                    {
                        books.filter((book) => {
                            if(bookSearch === ''){
                                return book
                            }
                            else if(book.title.toLowerCase().includes(bookSearch.toLowerCase())){
                                return book
                            }
                        }).map((book) => (
                            <Book book = {book} currStudent = {user.data}/>
                        ))
                    }
                </div>
            )
        }
        </div>
        </div>
  )
}

export default Books
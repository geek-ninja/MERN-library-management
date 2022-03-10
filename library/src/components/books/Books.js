import React, { useEffect, useState } from 'react'
import {CircularProgress} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import Book from './book/Book'
import { fetchBooks } from '../../api/books'
import './books.css'
import SearchIcon from '@material-ui/icons/Search';
import { getBooks } from '../../Action/bookAction'

function Books() {
    
    const dispatch = useDispatch()
    const books = useSelector((state) => state.books)
    // const [books,setBooks] = useState([])
    const [bookSearch,setBookSearch] = useState('')

    useEffect(() => {
        // fetchBooks().then((res) => setBooks(res.data))
        dispatch(getBooks())
    }, [dispatch, books])
    
  return (
    <div className='books'>
        <div className='books_search'>
            <div className='books_search_input'>
                <SearchIcon/>
                <input type = 'text' placeholder='search book' value={bookSearch} onChange={(e) => setBookSearch(e.target.value)}/>
            </div>
        </div>
        {
            !books.length ? <CircularProgress/>:(
                <div className='book_list'>
                    {
                        books.filter((book) => {
                            if(bookSearch === ''){
                                return book
                            }
                            else if(book.title.toLowerCase().includes(bookSearch.toLowerCase())){
                                return book
                            }
                        }).map((book) => (
                            <Book book = {book}/>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default Books
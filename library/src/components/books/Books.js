import React from 'react'
import {CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux'
import Book from './book/Book'

function Books() {
    const books = useSelector((state) => state.books)
  return (
    <div className='books'>
        {
            !books.length ? <CircularProgress/>:(
                <div className='books_list'>
                    {
                        books.map((book) => (
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
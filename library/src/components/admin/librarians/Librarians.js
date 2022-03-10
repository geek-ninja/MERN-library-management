import React, { useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Librarian from './librarian/Librarian'
import SearchIcon from '@material-ui/icons/Search';

function Librarians() {

    const librarians = useSelector((state) => state.librarian)

    const [librarianSearch,setLibrarianSearch] = useState('')

  return (
    <div className='librarians'>
        <div className='librarian_search'>
            <div className='librarian_search_input'>
                <SearchIcon/>
                <input type = 'text' placeholder='search librarian' value={librarianSearch} onChange={(e) => setLibrarianSearch(e.target.value)}/>
            </div>
        </div>
        <div className='librarian_table'>
        <table>
        <tr>
          <th>Librarian Name</th>
          <th>update</th>
          <th>delete</th>
        </tr>
        {
          !librarians.length ? 
          <div>
            <CircularProgress/>
            <h1>No librarians found</h1>
          </div> 
          :
            (
            librarians.filter((librarian) => {
              if(librarianSearch === ''){
                return librarian
              }
              else if(librarian.name.toLowerCase().includes(librarianSearch.toLowerCase())){
                return librarian
              }
            }).map((librarian) => (
              <Librarian librarian = {librarian}/>
            ))
            )
        }
      </table>
        </div>
    </div>
  )
}

export default Librarians
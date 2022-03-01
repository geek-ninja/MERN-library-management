import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Librarian from './librarian/Librarian'

function Librarians() {

    const librarians = useSelector((state) => state.librarian)

  return (
    <div className='librarians'>
      <table className='librarians_table'>
        <tr>
          <th>Librarian Name</th>
          <th></th>
          <th></th>
        </tr>
        {
          !librarians.length ? 
          <div>
            <CircularProgress/>
            <h1>No librarians found</h1>
          </div> 
          :
            (
            librarians.map((librarian) => (
              <Librarian librarian = {librarian}/>
            ))
            )
        }
      </table>
    </div>
  )
}

export default Librarians
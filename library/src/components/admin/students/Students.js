import React from 'react'
import Student from './student/Student'
import { CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

function Students() {
    const students = useSelector((state) => state.student)

  return (
    <div className='students'>
      <table className='students_table'>
        <tr>
          <th>Student Id</th>
          <th>Student Name</th>
          <th>Student Email</th>
          <th></th>
          <th></th>
        </tr>
        {
          !students.length ? 
          <div>
            <CircularProgress/>
            <h1>No Students found</h1>
          </div> 
          :
            students.map((student) => (
              <Student student = {student}/>
            ))
        }
      </table>
    </div>
  )
}

export default Students
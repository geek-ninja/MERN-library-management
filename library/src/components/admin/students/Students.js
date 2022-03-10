import React, { useState }  from 'react'
import Student from './student/Student'
import { CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';

function Students() {
  
  const students = useSelector((state) => state.student)

  const [studentSearch,setStudentSearch] = useState('')

  return (
    <div className='students'>
        <div className='students_search'>
            <div className='students_search_input'>
                <SearchIcon/>
                <input type = 'text' placeholder='search student id' value={studentSearch} onChange={(e) => setStudentSearch(e.target.value)}/>
            </div>
        </div>
        <div className='students_table'>
        <table>
        <tr>
          <th>Student Id</th>
          <th>Student Name</th>
          <th>Student Email</th>
          <th>update</th>
          <th>delete</th>
        </tr>
        {
          !students.length ? 
          <div>
            <CircularProgress/>
            <h1>No Students found</h1>
          </div> 
          :
            students.filter((student) => {
              if(studentSearch === ''){
                return student
              }
              else if(student.roll.toLowerCase().includes(studentSearch.toLowerCase())){
                return student
              }
            }).map((student) => (
              <Student student = {student}/>
            ))
        }
      </table>
        </div>
    </div>
  )
}

export default Students
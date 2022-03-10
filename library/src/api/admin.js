import axios from 'axios'

const url = 'http://localhost:5000/qlib'
// const url = 'https://q-library-server.herokuapp.com/qlib'

export const logAdmin = (adminData) => axios.post(`${url}/admin/login`,adminData)

// ***************** CRUD Student *********************

export const fetchStudents = () => axios.get(`${url}/admin/student`)

export const createStudent = (studentData) => axios.post(`${url}/admin/student`,studentData)

export const updateStudent = (id,updateStudent) => axios.patch(`${url}/admin/student/${id}`,updateStudent)

export const deleteStudent = (id) => axios.delete(`${url}/admin/student/${id}`)

//********************** CRUD Librarian ****************** 

export const fetchLibrarians = () => axios.get(`${url}/admin/librarian`)

export const createLibrarian = (librarianData) => axios.post(`${url}/admin/librarian`,librarianData)

export const updateLibrarian = (id,updateLibrarian) => axios.patch(`${url}/admin/librarian/${id}`,updateLibrarian)

export const deleteLibrarian = (id) => axios.delete(`${url}/admin/librarian/${id}`)
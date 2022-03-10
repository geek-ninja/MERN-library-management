import axios from 'axios'

const url = 'http://localhost:5000/qlib'
// const url = 'https://q-library-server.herokuapp.com/qlib'

export const logLibrarian = (librarianData) => axios.post(`${url}/librarian/login`,librarianData)

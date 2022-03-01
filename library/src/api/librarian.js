import axios from 'axios'

const url = 'http://localhost:5000/qlib'

export const logLibrarian = (librarianData) => axios.post(`${url}/librarian/login`,librarianData)

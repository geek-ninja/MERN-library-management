import axios from 'axios'

const url = 'http://localhost:5000/qlib'
// const url = 'https://q-library-server.herokuapp.com/qlib'

export const fetchBooks = () => axios.get(`${url}/books`)

export const createBooks = (newBook) => axios.post(`${url}/books`,newBook)

export const updateBooks = (id,updateBooks) => axios.patch(`${url}/books/${id}`,updateBooks)

export const deleteBooks = (id) => axios.delete(`${url}/books/${id}`)

export const bookQuantity = (id) => axios.patch(`${url}/books/${id}/quantity`)
export const bookQuantityRemove = (id) => axios.patch(`${url}/books/${id}/quantityRemove`)
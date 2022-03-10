import axios from 'axios'

const url = 'http://localhost:5000/qlib'
// const url = 'https://q-library-server.herokuapp.com/qlib'

export const logStudent = (StudentData) => axios.post(`${url}/student/login`,StudentData)
export const getStudentFine = (id,fine) => axios.patch(`${url}/student/${id}/fine`,fine)
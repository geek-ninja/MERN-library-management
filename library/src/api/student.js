import axios from 'axios'

const url = 'http://localhost:5000/qlib'

export const logStudent = (StudentData) => axios.post(`${url}/student/login`,StudentData)

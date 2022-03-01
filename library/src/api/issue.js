import axios from 'axios'

const url = 'http://localhost:5000/qlib'

export const fetchIssues = () => axios.get(`${url}/issue`)
export const createIssue = (newIssue) => axios.post(`${url}/issue`,newIssue)
export const deleteIssue = (id) => axios.delete(`${url}/issue/${id}`)
export const updateIssue = (id) => axios.patch(`${url}/issue/${id}/request`)
export const updateIssueReturned = (id) => axios.patch(`${url}/issue/${id}/returned`)
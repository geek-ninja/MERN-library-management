import axios from 'axios'

const url = 'http://localhost:5000/qlib'
// const url = 'https://q-library-server.herokuapp.com/qlib'

export const fetchIssues = () => axios.get(`${url}/issue`)
export const createIssue = (newIssue) => axios.post(`${url}/issue`,newIssue)
export const deleteIssue = (id) => axios.delete(`${url}/issue/${id}`)
export const updateIssue = (id) => axios.patch(`${url}/issue/${id}/request`)
export const updateIssueReturned = (id) => axios.patch(`${url}/issue/${id}/returned`)
export const updateIssueReturnDate = (id) => axios.patch(`${url}/issue/${id}/returndate`)
export const updateIssueFine = (id,fine) => axios.patch(`${url}/issue/${id}/fine`,fine)
// export const issueLibFineClear = (id) => axios.patch(`${url}/issue/${id}/clearLibfine`)
export const issueFineClear = (id) => axios.patch(`${url}/issue/${id}/clearfine`)
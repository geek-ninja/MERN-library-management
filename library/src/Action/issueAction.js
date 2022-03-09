import { CREATE_ISSUE, DELETE_ISSUE, FETCH_ALL_ISSUE, FILTER_ISSUE, UPDATE_ISSUE, UPDATE_ISSUE_DATE, UPDATE_ISSUE_RETURN_DATE } from "../constants/actionType"
import * as api from '../api/issue'

export const getIssues = () => async (dispatch) => {
    try {
        const { data } = await api.fetchIssues()
        const action = { type:FETCH_ALL_ISSUE, payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const createIssue = (issueReq) => async (dispatch) => {
    try {
        const { data } = await api.createIssue(issueReq)
        const action = { type:CREATE_ISSUE, payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteIssue = (id) => async (dispatch) => {
    try {
        await api.deleteIssue(id)
        dispatch({ type: DELETE_ISSUE , payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const updateIssue = (id) => async (dispatch) => {
    try {
        const {data} = await api.updateIssue(id)
        dispatch({ type:UPDATE_ISSUE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const updateIssueReturned = (id) => async (dispatch) => {
    try {
        const {data} = await api.updateIssueReturned(id)
        dispatch({ type:UPDATE_ISSUE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const updateIssueReturnDate = (id) => async (dispatch) => {
    try {
        const {data} = await api.updateIssueReturnDate(id)
        dispatch({ type:UPDATE_ISSUE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const updateIssueFine = (id,fine) => async (dispatch) => {
    try {
        const {data} = await api.updateIssueFine(id,fine)
        dispatch({ type:UPDATE_ISSUE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const issueFineClear = (id) => async (dispatch) => {
    try {
        const {data} = await api.issueFineClear(id)
        dispatch({ type:UPDATE_ISSUE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

// export const issueLibFineClear = (id) => async (dispatch) => {
//     try {
//         const {data} = await api.issueLibFineClear(id)
//         dispatch({ type:UPDATE_ISSUE,payload:data})
//     } catch (error) {
//         console.log(error)
//     }
// }
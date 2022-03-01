import {CREATE_ISSUE, DELETE_ISSUE, FETCH_ALL_ISSUE, FILTER_ISSUE, UPDATE_ISSUE, UPDATE_ISSUE_DATE, UPDATE_ISSUE_RETURN_DATE} from '../constants/actionType'

export default (issues = [],action) => {  //here issues == state
    switch (action.type) {
        case FETCH_ALL_ISSUE:
            return action.payload
        case CREATE_ISSUE:
           return [...issues,action.payload]
        case UPDATE_ISSUE:
            return issues.map((issue) => issue._id === action.payload._id ? action.payload : issue)
        case DELETE_ISSUE:
           return issues.filter((issue) => issue._id !== action.payload)
        default:
            return issues
    }
}
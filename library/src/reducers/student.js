import {CREATE_STUDENT, DELETE_STUDENT, GET_STUDENTS, UPDATE_STUDENT} from '../constants/actionType'

export default (student = [],action) => {  //here student = state
    switch (action.type) {
        case GET_STUDENTS:
            return action.payload
        case CREATE_STUDENT:
            return [...student,action.payload]
            case UPDATE_STUDENT:
               return student.map((s) => s._id === action.payload._id ? action.payload : s)
            case DELETE_STUDENT:
               return student.filter((s) => s._id !== action.payload)
        default:
            return student
    }
}
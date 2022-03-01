import {CREATE_LIBRARIAN, DELETE_LIBRARIAN, GET_LIBRARIANS, UPDATE_LIBRARIAN} from '../constants/actionType'

export default (librarian = [],action) => {  //here student = state
    switch (action.type) {
        case GET_LIBRARIANS:
            return action.payload
        case CREATE_LIBRARIAN:
            return [...librarian,action.payload]
        case UPDATE_LIBRARIAN:
            return librarian.map((l) => l._id === action.payload._id ? action.payload : l)
        case DELETE_LIBRARIAN:
            return librarian.filter((l) => l._id !== action.payload)
        default:
            return librarian
    }
}
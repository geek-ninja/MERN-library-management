import {FETCH_ALL_BOOK,CREATE_BOOK,UPDATE_BOOK,DELETE_BOOK} from '../constants/actionType'

export default (books = [],action) => {  //here books == state
    switch (action.type) {
        case FETCH_ALL_BOOK:
            return action.payload
        case CREATE_BOOK:
           return [...books,action.payload]
        case UPDATE_BOOK:
           return books.map((book) => book._id === action.payload._id ? action.payload : book)
        case DELETE_BOOK:
           return books.filter((book) => book._id !== action.payload)
        default:
            return books
    }
}

//exporting reducer
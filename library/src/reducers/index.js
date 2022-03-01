import { combineReducers } from 'redux'
import auth from './auth'
import student from './student'
import librarian from './librarian'
import books from './books'
import issue from './issue'

export default combineReducers({auth,student,librarian,books,issue})

import {LOG_ADMIN, LOG_LIBRARIAN, LOG_STUDENT} from '../constants/actionType'

export default (auth = [],action) => {  //here admin = state
    switch (action.type) {
        case LOG_ADMIN:
            return [...auth,action.payload]
        case LOG_LIBRARIAN:
            return [...auth,action.payload]
        case LOG_STUDENT:
            return [...auth,action.payload]
        default:
            return auth
    }
}
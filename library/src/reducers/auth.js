import {LOG_ADMIN, LOG_LIBRARIAN, LOG_STUDENT, USER_LOG_OUT} from '../constants/actionType'

export default (auth = [],action) => {  //here admin = state
    switch (action.type) {
        case LOG_ADMIN:
            return [...auth,action.payload]
        case LOG_LIBRARIAN:
            return [...auth,action.payload]
        case LOG_STUDENT:
            return [...auth,action.payload]
        case USER_LOG_OUT:
            return []
        default:
            return auth
    }
}
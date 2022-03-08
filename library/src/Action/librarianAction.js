import {LOG_LIBRARIAN} from '../constants/actionType'
import * as api from '../api/librarian'

export const loginLibrarian = (librarianData) => async (dispatch) => {
    try {
        const {data} = await api.logLibrarian(librarianData)  //here response is destructured to {data}
        localStorage.setItem("token",JSON.stringify(data.token))
        if(data.login){
            const action = {
                type:LOG_LIBRARIAN,
                payload:data
            }
            dispatch(action)
        }
        else{
            window.alert("wrong user")
        }
    } catch (error) {
        console.log(error)
    }
}
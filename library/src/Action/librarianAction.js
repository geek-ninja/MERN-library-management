import {LOG_LIBRARIAN} from '../constants/actionType'
import * as api from '../api/librarian'

export const loginLibrarian = (librarianData) => async (dispatch) => {
    try {
        const {data} = await api.logLibrarian(librarianData)  //here response is destructured to {data}
        if(data.login){
            const action = {
                type:LOG_LIBRARIAN,
                payload:data
            }
            dispatch(action)
            localStorage.setItem("token",JSON.stringify(data.token))
        }
        else{
            window.alert("wrong user")
        }
    } catch (error) {
        window.alert("incorrect input !")
        console.log(error)
    }
}
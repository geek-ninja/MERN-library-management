import {LOG_STUDENT} from '../constants/actionType'
import * as api from '../api/student'

export const loginStudent = (studentData) => async (dispatch) => {
    try {
        const {data} = await api.logStudent(studentData)  //here response is destructured to {data}
        if(data.login){
            const action = {
                type:LOG_STUDENT,
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
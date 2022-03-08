import {LOG_STUDENT, UPDATE_STUDENT} from '../constants/actionType'
import * as api from '../api/student'

export const loginStudent = (studentData) => async (dispatch) => {
    try {
        const {data} = await api.logStudent(studentData)  //here response is destructured to {data}
        localStorage.setItem("token",JSON.stringify(data.token))
        
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

export const getStudentFine = (id,fine) => async (dispatch) => {
    try {
        const { data } = await api.getStudentFine(id,fine)
        const action = { type:UPDATE_STUDENT, payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}
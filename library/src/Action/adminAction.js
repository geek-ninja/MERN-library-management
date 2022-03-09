import {LOG_ADMIN,CREATE_STUDENT,CREATE_LIBRARIAN, GET_STUDENTS, UPDATE_STUDENT, DELETE_STUDENT, UPDATE_LIBRARIAN, GET_LIBRARIANS, DELETE_LIBRARIAN, USER_LOG_OUT} from '../constants/actionType'
import * as api from '../api/admin'

export const loginAdmin = (adminData) => async (dispatch) => {
    try {
        const {data} = await api.logAdmin(adminData)  //here response is destructured to {data}
        if(data.login){
            localStorage.setItem("token",JSON.stringify(data.token))
            const action = {
                type:LOG_ADMIN,
                payload:data
            }
            dispatch(action)
        }
        else{
            window.alert("wrong user")
        }
    } catch (error) {
        window.alert("incorrect input !")
        console.log(error)
    }
}
export const logoutAdmin = () => async (dispatch) => {
    try {
        dispatch({
            type:USER_LOG_OUT,
            payload:[]
        })
    } catch (error) {
        console.log(error)
    }
}

export const createStudent = (studentData) => async (dispatch) => {
    try {
        const { data } = await api.createStudent(studentData)
        const action = { type:CREATE_STUDENT, payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const getStudents = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStudents()
        const action = { type:GET_STUDENTS, payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const updateStudent = (id,student) => async (dispatch) => {
    try {
        const { data } = await api.updateStudent(id,student)
        const action = { type:UPDATE_STUDENT, payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const deleteStudent = (id) => async (dispatch) => {
    try {
        await api.deleteStudent(id)
        dispatch({ type: DELETE_STUDENT , payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const createLibrarian = (librarianData) => async (dispatch) => {
    try {
        const { data } = await api.createLibrarian(librarianData)
        const action = { type:CREATE_LIBRARIAN, payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const getLibrarians = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLibrarians()
        const action = { type:GET_LIBRARIANS, payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const updateLibrarian = (id,librarian) => async (dispatch) => {
    try {
        const { data } = await api.updateLibrarian(id,librarian)
        const action = { type:UPDATE_LIBRARIAN, payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const deleteLibrarian = (id) => async (dispatch) => {
    try {
        await api.deleteLibrarian(id)
        dispatch({ type: DELETE_LIBRARIAN, payload: id})
    } catch (error) {
        console.log(error)
    }
}
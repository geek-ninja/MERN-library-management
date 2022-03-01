import {FETCH_ALL_BOOK,CREATE_BOOK,UPDATE_BOOK,DELETE_BOOK} from '../constants/actionType'

import * as api from '../api/books'

export const getBooks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBooks()
        const action = { type:FETCH_ALL_BOOK, payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}
export const createBooks = (book) => async (dispatch) => {
    try {
        const { data } = await api.createBooks(book)
        const action = { type:CREATE_BOOK, payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const updateBooks = (id,book) => async (dispatch) => {
    try {
        const { data } = await api.updateBooks(id,book)
        const action = { type:UPDATE_BOOK, payload : data}
        dispatch(action)
    } catch (error) {
        console.log(error)
    }
}

export const deleteBooks = (id) => async (dispatch) => {
    try {
        await api.deleteBooks(id)
        dispatch({ type: DELETE_BOOK , payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const bookQuantity = (id) => async (dispatch) => {
    try {
        const {data} = await api.bookQuantity(id)
        dispatch({ type:UPDATE_BOOK,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const bookQuantityRemove = (id) => async (dispatch) => {
    try {
        const {data} = await api.bookQuantityRemove(id)
        dispatch({ type:UPDATE_BOOK,payload:data})
    } catch (error) {
        console.log(error)
    }
}
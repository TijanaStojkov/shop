import axios from 'axios';
import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const authSuccess = (token, userId, isSignup) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId,
        isSignup: isSignup,
    }
}
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime')
    localStorage.removeItem('id')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export const checkAuthTimeout = (experationTime) => {
    return dispatch => {
        setTimeout(() =>{
            dispatch(logout())
        },experationTime * 1000)
    }
}
export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart())
        const authData= {
            email: email,
            password: password,
            returnSecureToken: true

        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAATUuvBO4IEQ4Su0o-qrATOKx7fD0z8wI';
        if(!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAATUuvBO4IEQ4Su0o-qrATOKx7fD0z8wI'
        }
        axios.post(url, authData)
        .then(response => {
            const expirationTime = new Date(new Date().getTime()+ response.data.expiresIn*1000)
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('expirationTime',expirationTime)
            localStorage.setItem('id',response.data.localId)

            dispatch(authSuccess(response.data.idToken, response.data.localId, isSignup))
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        .catch( error => {
            dispatch(authFail(error.response.data.error.message))
        })
    }
}
export const setAuthRedirect = (path) => {
    return{
        type: actionTypes.SET_AUTH_REDIRECT,
        path: path,
    }
}
export const authCheckState = () => {
    return dispatch => {

        const expDate = new Date(localStorage.getItem('expirationTime'));
        const token = localStorage.getItem('token')
        if(token){
            const id = localStorage.getItem('id')
            dispatch(authSuccess(token, id))
            checkAuthTimeout((expDate.getTime() - new Date().getTime())/1000)
        }else{
            dispatch(logout())
        }
    }
}
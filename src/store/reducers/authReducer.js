import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initState = {
    token: null,
    userId: null,
    loading: false,
    error: null,
    authRedirectPath:'/',
    successMessage: null
}

const authReducer = ( state= initState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return updateObject (state,{loading: true, error: null})
        case actionTypes.AUTH_SUCCESS:
            if(!action.isSignup){
                return updateObject (state,{loading: false, error: null, token: action.token, userId: action.userId, })
            }else{
                return updateObject (state,{loading: false, error: null, successMessage: 'You have successfully signed up'})
            }
        case actionTypes.AUTH_FAIL:
            return updateObject (state,{loading: false, error: action.error})
        case actionTypes.AUTH_LOGOUT:
            return updateObject (state, {token: null, userId: null})
        case actionTypes.SET_AUTH_REDIRECT:
            return updateObject (state, {authRedirectPath: action.path})
        default:
            return state
    }
}

export default authReducer;
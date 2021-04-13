import {authSlice} from '../slices/auth-slice'


export const setLoginDataToState = loginInfo => dispatch => {
    dispatch(authSlice.actions.setLogin(loginInfo))
}
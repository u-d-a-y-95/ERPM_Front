import { authSlice } from '../slices/auth-slice'


export const setLoginDataToState = loginInfo => dispatch => {
    dispatch(authSlice.actions.setLogin(loginInfo))
}
export const setLogoutDataToState = loginInfo => dispatch => {
    dispatch(authSlice.actions.setLogout(loginInfo))
}
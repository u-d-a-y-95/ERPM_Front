import { userSlice } from '../slices/user-slice'


export const setLoginDataToState = loginInfo => dispatch => {
    dispatch(userSlice.actions.setLogin(loginInfo))
}
// export const setLogoutDataToState = loginInfo => dispatch => {
//     dispatch(authSlice.actions.setLogout(loginInfo))
// }
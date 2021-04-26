import { userSlice } from '../slices/user-slice'


export const setUserDataToState = data => dispatch => {
    dispatch(userSlice.actions.setUser(data))
}
// export const setLogoutDataToState = loginInfo => dispatch => {
//     dispatch(authSlice.actions.setLogout(loginInfo))
// }
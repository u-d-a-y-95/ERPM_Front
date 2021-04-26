import { userInfoSlice } from '../slices/user-current-info-slice'


export const setUserCurrentInfoToState = data => dispatch => {
    dispatch(userInfoSlice.actions.setCurrentInfo(data))
}
export const setUserCurrentInfoBusinessUnitToState = data => dispatch => {
    dispatch(userInfoSlice.actions.setBusinessUnit(data))
}
// export const setLogoutDataToState = loginInfo => dispatch => {
//     dispatch(authSlice.actions.setLogout(loginInfo))
// }
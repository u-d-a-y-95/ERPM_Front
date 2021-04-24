import { commonSlice } from '../slices/common-slice'


export const setLoadIncrementToState = () => dispatch => {
    dispatch(commonSlice.actions.increamentLoading())
}
export const setLoadDecrementToState = () => dispatch => {
    dispatch(commonSlice.actions.decreamentLoading())
}
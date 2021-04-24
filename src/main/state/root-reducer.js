import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth-slice";
import { userSlice } from "./slices/user-slice";
import { commonSlice } from "./slices/common-slice";



export const rootReducer = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer,
    common: commonSlice.reducer,
    // employeeDetails:
});

import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        accountEmail: "",
        accountId: "",
        accountName: "",
        token: "",
        isAuth: false
    },
    reducers: {
        setLogin: (state, action) => {
            state.accountEmail = action.payload.accountEmail;
            state.accountId = action.payload.accountId;
            state.accountName = action.payload.accountName;
            state.token = action.payload.token;
            state.isAuth = action.payload.isAuth;
        },
        setLogout: (state, action) => {
            state.userName = "";
            state.password = "";
            state.isAuth = false;
        }
    }
})
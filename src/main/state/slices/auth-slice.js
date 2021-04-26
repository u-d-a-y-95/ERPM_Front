import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: "Auth",
    initialState: {
        userName: "",
        password: "",
        isLogged: false,
        token: "",
        accountName: "",
        accountId: "",
        userId: ""
    },
    reducers: {
        setLogin: (state, action) => {
            state.userName = action.payload.userName;
            state.password = action.payload.password;
            state.isLogged = action.payload.isLogged;
            state.token = action.payload.token;
            state.accountName = action.payload.accountName;
            state.accountId = action.payload.accountId;
            state.userId = action.payload.userId;
        },
        setLogout: (state, action) => {
            state.userName = "";
            state.password = "";
            state.isLogged = false;
            state.token = "";
            state.accountName = "";
            state.accountId = "";
            state.userId = "";
        }
    }
})
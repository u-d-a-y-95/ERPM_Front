import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: "Auth",
    initialState: {
        userName: "",
        password: "",
        language: "",
        isAuth: false
    },
    reducers: {
        setLogin: (state, action) => {
            state.userName = action.payload.userName;
            state.password = action.payload.password;
            state.isAuth = action.payload.isAuth;
        },
        setLogout: (state, action) => {
            state.userName = "";
            state.password = "";
            state.isAuth = false;
        }
    }
})
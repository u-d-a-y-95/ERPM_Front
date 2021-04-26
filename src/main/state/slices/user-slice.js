import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        info: {}
    },
    reducers: {
        setUser: (state, action) => {
            console.log('action', action)
            return {
                ...state,
                info: action.payload.user
            }
        },
        removeUser: (state, action) => {
            return {

            }
        }
    }
})
import { createSlice } from '@reduxjs/toolkit'

export const commonSlice = createSlice({
    name: "common",
    initialState: {
        loadingCount: 0
    },
    reducers: {
        increamentLoading: (state, action) => {
            return {
                ...state,
                loadingCount: state.loadingCount + 1
            }
        },
        decreamentLoading: (state, action) => {
            return {
                ...state,
                loadingCount: state.loadingCount - 1
            }
        }
    }
})
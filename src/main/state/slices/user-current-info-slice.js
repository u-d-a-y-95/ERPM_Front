import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
    name: "currentInfo",
    initialState: {
        userId: "",
        accountId: "",
        businessUnitId: ""
    },
    reducers: {
        setCurrentInfo: (state, action) => {
            return {
                ...state,
                userId: action.payload.userId,
                accountId: action.payload.accountId,
                businessUnitId: action.payload.businessUnitId,
            }
        },
        removeCurrentInfo: (state, action) => {
            return {
                ...state,
                userId: "",
                accountId: "",
                businessUnitId: ""
            }
        },
        setBusinessUnit: (state, action) => {
            return {
                ...state,
                businessUnitId: action.payload.businessUnitId
            }
        }
    }
})
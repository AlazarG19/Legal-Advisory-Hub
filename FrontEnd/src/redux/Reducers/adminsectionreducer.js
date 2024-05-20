import { createSlice } from '@reduxjs/toolkit'

export const adminsectionsSlice = createSlice({
    name: 'adminsections',
    initialState: {
        value: [],
    },
    reducers: {
        setadminsections: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            state.value = action.payload
        },
        editadminstatement: (state, action) => {
            console.log("--------------------- reducer")
            console.log("previous state", state.value)
            state.value = action.payload.adminsection
            console.log("next state", state.value)
            console.log("--------------------- reducer")
        }
    },
})

// Action creators are generated for each case reducer function
export const { setadminsections, editadminstatement } = adminsectionsSlice.actions

export default adminsectionsSlice.reducer
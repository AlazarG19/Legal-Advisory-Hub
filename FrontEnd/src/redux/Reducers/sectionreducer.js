import { createSlice } from '@reduxjs/toolkit'

export const sectionsSlice = createSlice({
    name: 'sections',
    initialState: {
        value: [],
    },
    reducers: {
        setsections: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            state.value = action.payload
        },
        editstatement: (state, action) => {
            state.value = action.payload.sections
            console.log("within reducer")
            console.log("state", state.value)
            console.log("action", action)
        }
    },
})

// Action creators are generated for each case reducer function
export const { setsections, editstatement } = sectionsSlice.actions

export default sectionsSlice.reducer
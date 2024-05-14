import { createSlice } from '@reduxjs/toolkit'

export const formtextSlice = createSlice({
    name: 'formtext',
    initialState: {
        value: [],
        completed: false
    },
    reducers: {
        setformtext: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            console.log("withing set form text ")
            console.log(action.payload)
            state.value = action.payload
        },
        setcompleted: (state, action) => {
            console.log("---------------------------------------------------set complete")
            state.completed = true
        },
        editformtext: (state, action) => {
            state.value = action.payload.section
            console.log("within reducer")
            console.log("state of form text", state.value)
            console.log("action of form text", action)

        }
    },
})

// Action creators are generated for each case reducer function
export const { setformtext, editformtext, setcompleted } = formtextSlice.actions

export default formtextSlice.reducer
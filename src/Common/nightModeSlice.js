import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: "day",
}



export const nightModeSlice = createSlice({
    name: 'nightmode',
    initialState,
    reducers: {
        toggleNightMode: (state) => {
            if (state.status === "day") {
                state.status = "night"
            } else {
                state.status = "day"
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleNightMode } = nightModeSlice.actions

export default nightModeSlice.reducer
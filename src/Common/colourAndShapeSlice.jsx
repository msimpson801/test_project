import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colour: "hotpink",
}



export const colourSlice = createSlice({
    name: 'shape',
    initialState,
    reducers: {
        toggleColour: (state) => {
            if (state.colour === "hotpink") {
                state.colour = "dodgerblue"
            } else {
                state.colour = "hotpink"
            }
        }
    },
})

export const { toggleColour } = colourSlice.actions


export default colourSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colour: "hotpink",
    shape: "star"
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
        },
        toggleShape: (state) => {
            if (state.shape === "star") {
                state.shape = "heart"
            } else {
                state.shape = "star"
            }
        }
    },
})

export const { toggleColour,toggleShape } = colourSlice.actions


export default colourSlice.reducer
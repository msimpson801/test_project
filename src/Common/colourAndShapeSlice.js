import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shapeColour: "hotpink",
    mode: "day"
}

function toggleColour(state) {
    if (state.shapeColour === "hotpink") {
        state.shapeColour = "dodgerblue"
    } else {
        state.shapeColour = "hotpink"
    }
}


function toggleMode(state) {
    if (state.mode === "night") {
        state.mode = "day"
    } else {
        state.mode = "night"
    }
}

export const colourAndShapeSlice = createSlice({
    name: 'colourAndShape',
    initialState,
    reducers: {
        toggleColor: toggleColour,
        toggleMode: toggleMode
    },
})

export const actions = colourAndShapeSlice.actions

export default colourAndShapeSlice.reducer
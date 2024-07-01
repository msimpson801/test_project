import { configureStore } from '@reduxjs/toolkit';
import nightModeReducer from "./nightModeSlice";
import colourReducer from "./colourAndShapeSlice";

export const store = configureStore({
    reducer: {
        nightmode: nightModeReducer,
        shape: colourReducer,
    },
})
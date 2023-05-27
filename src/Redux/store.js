import { configureStore } from "@reduxjs/toolkit";
import newsSearchSlice from "./newsSearcSlice";

export const store = configureStore({
    reducer: {
        reduxNews: newsSearchSlice
    }
})
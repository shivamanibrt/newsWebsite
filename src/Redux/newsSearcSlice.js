import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    reduxNews: []
}
export const newsSearchSlice = createSlice({
    name: 'News',
    initialState,
    reducers: {
        setReduxNews: (state, action) => {
            state.reduxNews = action.payload
        },
    }
})

const { reducer, actions } = newsSearchSlice;
export const { setReduxNews } = actions;
export default reducer 
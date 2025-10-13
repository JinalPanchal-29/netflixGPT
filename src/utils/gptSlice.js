import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieData: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResults: (state, action) => {
            const {movieNames, movieData} = action.payload
            state.movieNames = movieNames
            state.movieData = movieData
        }
    }
})

export const {toggleGptSearchView, addGptMovieResults} = gptSlice.actions;
export default gptSlice.reducer
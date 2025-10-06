import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "../utils/userSlice";
import movieReducer from '../utils/movieSlice';
import gptReducer from '../utils/gptSlice'

const appStore = configureStore({
    reducer: {
        user: useReducer,
        movies: movieReducer,
        gpt: gptReducer
    }
})

export default appStore;
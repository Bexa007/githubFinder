import { configureStore } from "@reduxjs/toolkit";
import githubData from './github/githubData'


export const store = configureStore({
    reducer:{
        github: githubData
    }
})
import { configureStore } from "@reduxjs/toolkit";
import data from './reducer'

export const store=configureStore({
    reducer:{
        appStore:data
    }
})
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice.js";


export const store = configureStore({
    reducer: {
        user: userSlice
    }
})
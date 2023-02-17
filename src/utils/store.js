import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";


const store = configureStore({
    reducer: {
        sidebar: sideBarSlice,
    },
});

export default store;
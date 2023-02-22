import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import categorySlice from "./categorySlice";


const store = configureStore({
    reducer: {
        sidebar: sideBarSlice,
        categories: categorySlice,
    },
});

export default store;
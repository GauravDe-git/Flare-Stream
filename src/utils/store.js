import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";


const store = configureStore({
    reducer: {
        sidebar: sideBarSlice,
        categories: categorySlice,
        search: searchSlice,
    },
});

export default store;
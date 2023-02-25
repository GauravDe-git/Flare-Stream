import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";
import authSlice from "../components/Auth/authSlice";


const store = configureStore({
    reducer: {
        sidebar: sideBarSlice,
        categories: categorySlice,
        search: searchSlice,
        auth: authSlice,
    },
});

export default store;
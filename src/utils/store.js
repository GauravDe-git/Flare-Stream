import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";
import authSlice from "../components/Auth/authSlice";
import resultsSlice from "./resultsSlice";


const store = configureStore({
    reducer: {
        sidebar: sideBarSlice,
        categories: categorySlice,
        search: searchSlice,
        auth: authSlice,
        results: resultsSlice,
    },
});

export default store;
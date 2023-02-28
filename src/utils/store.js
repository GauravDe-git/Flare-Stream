import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";
import authSlice from "../components/Auth/authSlice";
import resultsSlice from "./resultsSlice";
import likedVideosSlice from "./likedVideosSlice";

import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['sidebar', 'categories', 'search', 'auth', 'likedVideos'],
    blacklist: ['results'],
};

const rootReducer = combineReducers({
    sidebar: sideBarSlice,
    categories: categorySlice,
    search: searchSlice,
    auth: authSlice,
    results: resultsSlice,
    likedVideos: likedVideosSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware({
        serializableCheck: false,
    })],
});

export const persistor = persistStore(store);

export default store;
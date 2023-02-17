import { createSlice } from "@reduxjs/toolkit";


const sideBarSlice = createSlice({
    name: "sidebar",
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});

export const {toggleMenu} = sideBarSlice.actions;

export default sideBarSlice.reducer;
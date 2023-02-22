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
        closeMenu: (state)=>{
            state.isMenuOpen = false;
        }
    },
});

export const {toggleMenu, closeMenu} = sideBarSlice.actions;

export default sideBarSlice.reducer;
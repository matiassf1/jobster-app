import { createSlice } from '@reduxjs/toolkit';

export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState: { 
        isSideBarOpen: false,
     },
    reducers: { 
        toggleSideBar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen
        }
     },
});

export const {toggleSideBar} = sideBarSlice.actions;
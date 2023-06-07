import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/userSlice'
import { sideBarSlice } from './sideBarSlice'

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        job: userSlice.reducer,
        sidebar: sideBarSlice.reducer
    },
});
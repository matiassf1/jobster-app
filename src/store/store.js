import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/userSlice'
import { sideBarSlice } from './sideBarSlice'
import { jobSlice } from './jobs/jobSlide';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        job: jobSlice.reducer,
        sidebar: sideBarSlice.reducer
    },
});
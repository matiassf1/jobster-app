import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/userSlice'
import { sideBarSlice } from './sideBarSlice'
import { jobSlice } from './jobs/jobSlide';
import { allJobsSlide } from './jobs/allJobsSlide';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        allJobs: allJobsSlide.reducer,
        sidebar: sideBarSlice.reducer,
        job: jobSlice.reducer,
    },
});
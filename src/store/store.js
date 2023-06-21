import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/userSlice'
import { sideBarSlice } from './sideBarSlice'
import { allJobsSlice } from './jobs/allJobsSlice';
import { jobSlice } from './jobs/jobSlice';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        allJobs: allJobsSlice.reducer,
        sidebar: sideBarSlice.reducer,
        job: jobSlice.reducer,
    },
});
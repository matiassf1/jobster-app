import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/userSlice'
import { sideBarSlice } from './jobs/sideBarSlice'

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        sidebar: sideBarSlice.reducer
    },
})
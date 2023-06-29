import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../services/axios";
import { logout } from "../user/userSlice";
import { toast } from 'react-toastify';
import { getAllJobsThunks, showStatsThunks } from './allJobsThunks';

export const getAllJobs = createAsyncThunk(
    'allJobs/getJobs',
    getAllJobsThunks
)

export const showStats = createAsyncThunk(
    'allJobs/showStats',
    showStatsThunks
)

const initialFilterState = {
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a']
}

const initialState = {
    isLoading: false,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    ...initialFilterState
}

export const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true;
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
        handleChangeSearch: (state, { payload: { name, value } }) => {
            state.page = 1;
            state[name] = value;
        },
        clearValuesSearch: (state) => {
            return { ...state, ...initialFilterState }
        },
        changePage: (state, { payload }) => {
            state.page = payload;
        },
        clearAllJobsState: (state) => {
            state = initialState;
        }
    },
    extraReducers: {
        [getAllJobs.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllJobs.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.jobs = payload.jobs;
            state.numOfPages = payload.numOfPages;
            state.totalJobs = payload.totalJobs;
        },
        [getAllJobs.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [showStats.pending]: (state) => {
            state.isLoading = true;
        },
        [showStats.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.stats = payload.defaultStats;
            state.monthlyApplications = payload.monthlyApplications;
        },
        [showStats.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    }
});

export const {
    showLoading,
    hideLoading,
    handleChangeSearch,
    clearValuesSearch,
    changePage,
    clearAllJobsState } = allJobsSlice.actions;
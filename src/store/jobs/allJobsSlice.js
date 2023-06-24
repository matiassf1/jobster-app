import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../services/axios";
import { logout } from "../user/userSlice";
import { toast } from 'react-toastify';

export const getAllJobs = createAsyncThunk(
    'allJobs/getJobs',
    async (_, thunkAPI) => {
        let url = '/jobs';

        try {
            const { data } = await customFetch.get(url)
            return data;
        } catch (error) {
            if (error.response.status === 401) {
                thunkAPI.dispatch(logout());
                return thunkAPI.rejectWithValue(`${error.response.data.msg}, Loggin Out...`);
            }
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)

export const showStats = createAsyncThunk(
    'allJobs/showStats',
    async (_, thunkAPI) => {
        let url = '/jobs/stats';

        try {
            const { data } = await customFetch.get(url);
            return data;
        } catch (error) {
            if (error.response.status === 401) {
                thunkAPI.dispatch(logout());
                return thunkAPI.rejectWithValue(`${error.response.data.msg}, Loggin Out...`);
            }
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
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
        }
    },
    extraReducers: {
        [getAllJobs.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllJobs.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.jobs = payload.jobs;
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

export const { showLoading, hideLoading } = allJobsSlice.actions;
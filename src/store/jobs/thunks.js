import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../services/axios";
import { logout } from "../user/userSlice";
import { clearValues } from "./jobSlice";
import { getAllJobs, hideLoading, showLoading } from './allJobsSlice';


export const createJob = createAsyncThunk(
    'job/createJob',
    async (job, thunkAPI) => {
        try {
            const { data } = await customFetch.post('/jobs', job);
            thunkAPI.dispatch(clearValues());
            return data;
        } catch (error) {
            if (error.response.status === 401) {
                thunkAPI.dispatch(logout());
                return thunkAPI.rejectWithValue('Unauthorized! Loggin Out...');
            }
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)

export const editJob = createAsyncThunk(
    'job/editJob',
    async ({ jobId, job }, thunkAPI) => {
        thunkAPI.dispatch(showLoading());
        try {
            const { data } = await customFetch.patch(`/jobs/${jobId}`, job)
            thunkAPI.dispatch(getAllJobs());
            return data;
        } catch (error) {
            thunkAPI.dispatch(hideLoading());
            if (error.response.status === 401) {
                thunkAPI.dispatch(logout());
                return thunkAPI.rejectWithValue('Unauthorized! Loggin Out...');
            }
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)



export const deleteJob = createAsyncThunk(
    'job/deleteJob',
    async (jobId, thunkAPI) => {
        thunkAPI.dispatch(showLoading());
        try {
            const { data } = await customFetch.delete(`/jobs/${jobId}`)
            thunkAPI.dispatch(getAllJobs());
            return data;
        } catch (error) {
            thunkAPI.dispatch(hideLoading());
            if (error.response.status === 401) {
                thunkAPI.dispatch(logout());
                return thunkAPI.rejectWithValue('Unauthorized! Loggin Out...');
            }
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)




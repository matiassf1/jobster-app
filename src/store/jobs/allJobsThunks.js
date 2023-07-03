import { customFetch } from "../../services/axios";
import { logout } from "../user/userSlice";

export const getAllJobsThunks = async (_, thunkAPI) => {
    const {
        page,
        search,
        searchStatus,
        searchType,
        sort
    } = thunkAPI.getState().allJobs;
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    if (search) {
        url = url + `&search=${search}`;
    }
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


export const showStatsThunks = async (_, thunkAPI) => {
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
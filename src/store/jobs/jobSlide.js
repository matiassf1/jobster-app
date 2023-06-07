import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { createJob } from './thunks';

const initialState = {
    isLoading: false,
    position: '',
    company: '',
    jobLocation: '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'intership'],
    jobType: 'full-time',
    statusOptions: ['interview', 'declined', 'pending'],
    status: 'pending',
    isEditing: false,
    editJobId: ''
}

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        clearValues: () => {
            return {
                ...initialState
            }
        }
    },
    extraReducers: {
        [createJob.pending]: (state) => {
            state.isLoading = true;
        },
        [createJob.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state = {
                ...state,
                ...payload
            }
            toast.success('Job Added Succesfully');
        },
        [createJob.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload)
        }
    }
});

export const { handleChange, clearValues } = jobSlice.actions;
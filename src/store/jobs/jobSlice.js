import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { createJob, deleteJob, editJob } from './jobThunks';
const initialState = {
    isLoading: false,
    position: '',
    company: '',
    jobLocation: '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
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
        },
        setEditJob: (state, { payload }) => {
            return {
                ...state,
                isEditing: true,
                ...payload
            }
        }
    },
    extraReducers: {
        [createJob.pending]: (state) => {
            state.isLoading = true;
        },
        [createJob.fulfilled]: (state) => {
            state.isLoading = false;
            toast.success('Job Added Succesfully');
        },
        [createJob.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload)
        },
        [deleteJob.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteJob.fulfilled]: (state) => {
            state.isLoading = false;
            toast.success('Job Deleted...');
        },
        [deleteJob.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [editJob.pending]: (state) => {
            state.isLoading = true;
        },
        [editJob.fulfilled]: (state) => {
            state.isLoading = false;
            toast.success('Job Modified...');
        },
        [editJob.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        }
    }
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
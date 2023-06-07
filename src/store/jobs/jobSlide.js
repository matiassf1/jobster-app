import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/localStorage';

export const jobSlide = createSlice({
    name: 'job',
    initialState: {
        isLoading: false,
        position: '',
        company: '',
        jobLocation: '',
        jobTypeOption: ['full-time', 'part-time', 'remote', 'intership'],
        jobType: 'full-time',
        statusOptions: ['interview', 'declined', 'pending'],
        status: 'pending',
        isEditing: false,
        editJobId: ''
    },
    reducers: {},
});

export const { } = jobSlide.actions;
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loading, login } from "./userSlice";

export const registerThunk = createAsyncThunk(
    'user/registerUser',
    async(user, thunkAPI, dispatch) => {
        console.log('Register user: ', user);
    }
)
export const loginThunk = (user) => {
    return async(dispatch) => {
        dispatch(login( user ));
    }

}
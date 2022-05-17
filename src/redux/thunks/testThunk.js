import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const testThunk = createAsyncThunk(
    'testFetch',
    async ({url}) => {
        const response = await axios.get(url)
        return response.data
    })


const testThunkPending = (state) => {
    state.allUsers = []
}

const testThunkFulfilled = (state, {payload}) => {
    state.allUsers = payload
}


export const testExtraReducer = builder => {
    builder
        .addCase(testThunk.pending, testThunkPending)
        .addCase(testThunk.fulfilled, testThunkFulfilled)
}










import {combineReducers} from "@reduxjs/toolkit";
import userReducer from '../redux/slices/userSlice'

export const rootReducer = combineReducers({
    userReducer
})

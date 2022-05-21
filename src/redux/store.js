import {configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {rootReducer} from "./index";

const configs = {
    key: 'root',
    storage,
    whitelist: ['userReducer'],
}

const persistedReducer = persistReducer(configs, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistedStore = persistStore(store)

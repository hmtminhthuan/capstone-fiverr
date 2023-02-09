import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import jobReducer from './reducers/jobReducer'


export const store = configureStore({
    reducer: {
        jobReducer:jobReducer,
        userReducer: userReducer,

    }
})
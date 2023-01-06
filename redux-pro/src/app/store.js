import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../features/counterSlice'
import objReducer from '../features/objSlice'


export const store = configureStore({
    reducer:{
        counter: counterReducer,
        objs : objReducer
    }
})

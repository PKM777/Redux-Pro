import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        name: 'pkm',
        job: 'dev',
        exp: 2
    },
    {
        name: 'bro',
        job : 'cry',
        exp: 3
    }

]


export const objSlice = createSlice({
    name: 'objs',
    initialState,
    reducers:{
        
    }
})

export const allObjs = (state)=> state.objs


export default objSlice.reducer
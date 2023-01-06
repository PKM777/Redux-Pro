import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from '@reduxjs/toolkit'

const id = nanoid()


const initialState = [
    {   id : 1001,
        name: 'pkm',
        job: 'dev',
        exp: 2
    },
    {   
        id : 1002,
        name: 'bro',
        job : 'cry',
        exp: 3
    }

]


export const objSlice = createSlice({
    name: 'objs',
    initialState,
    reducers:{
        submitForm: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(name, job, exp){
                return {
                    payload:{
                        id,
                        name,
                        job,
                        exp
                    }
                }
               
            }


        }
        
    }
})

export const allObjs = (state)=> state.objs

export const { submitForm } = objSlice.actions

export default objSlice.reducer

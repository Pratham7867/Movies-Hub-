import { createSlice } from '@reduxjs/toolkit'


 const initialState = {
      info:null
    }

export const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    loadmovie:(state,action)=>{
        state.info=action.payload
    },
    removemovie:(state,action)=>{
        state.info=null
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = tvSlice.actions

export default tvSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
export const sheduleSlice = createSlice({
    name: 'jobs',
    initialState: {
        sheds: []
    },
    reducers: {
      addShed: (state, action) => {
        //console.log(action.payload)
        console.log(state.sheds.length)
          state.sheds.push(action.payload);
      },
      deleteShed: (state, action) =>{
            state.sheds = state.sheds.filter(a => a.id !== action.payload.id)
      },
      saveShed :(state, action) => {
          state.sheds = state.sheds.filter(a => a.id !== action.payload.id);
          console.log(action.payload.id)
          state.sheds.push(action.payload);
      }
    },
  });
  export const {addShed, deleteShed, saveShed} =  sheduleSlice.actions;
  export default sheduleSlice.reducer
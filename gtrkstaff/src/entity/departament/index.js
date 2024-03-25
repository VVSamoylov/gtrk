import { createSlice } from "@reduxjs/toolkit";
export const departamentsSlice = createSlice({
    name: 'departaments',
    initialState: {
        departaments: []
    },
    reducers: {
      addDept: (state, action) => {
          state.departaments.push(action.payload);
      },
      deleteDept: (state, action) =>{
            state = state.departaments.filter(a => a.id !== action.payload.id)
      },
      saveDept :(state, action) => {
          state = state.departaments.filter(a => a.id !== action.playload.id);
          state.departaments.push(action.payload);
      }
    },
  });
  export const {addDept, deleteDept, saveDept} =  departamentsSlice.actions;
  export default departamentsSlice.reducer
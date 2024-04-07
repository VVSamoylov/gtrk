import { createSlice } from "@reduxjs/toolkit";
export const departamentsSlice = createSlice({
    name: 'departaments',
    initialState: {
        departaments: []
    },
    reducers: {
      addDept: (state, action) => {
        //console.log(action.payload)
        console.log(state.departaments.length)
          state.departaments.push(action.payload);
      },
      deleteDept: (state, action) =>{
            state.departaments = state.departaments.filter(a => a.id !== action.payload.id)
      },
      saveDept :(state, action) => {
          state.departaments = state.departaments.filter(a => a.id !== action.payload.id);
          //console.log(action.payload.id)
          state.departaments.push(action.payload);
      }
    },
  });
  export const {addDept, deleteDept, saveDept} =  departamentsSlice.actions;
  export default departamentsSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
export const notworkSlice = createSlice({
    name: 'notworks',
    initialState: {
        notworks: []
    },
    reducers: {
      addNotWork: (state, action) => {
        //console.log(action.payload)
        console.log(state.notworks.length)
          state.notworks.push(action.payload);
      },
      deleteNotWork: (state, action) =>{
            state.notworks = state.notworks.filter(a => a.id !== action.payload.id)
      },
      saveNotWork :(state, action) => {
          state.notworks = state.notworks.filter(a => a.id !== action.payload.id);
          //console.log(action.payload.id)
          state.notworks.push(action.payload);
      }
    },
  });
  export const {addNotWork, deleteNotWork, saveNotWork} =  notworkSlice.actions;
  export default notworkSlice.reducer
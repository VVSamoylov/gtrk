import { createSlice } from "@reduxjs/toolkit";
export const jobsSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobs: []
    },
    reducers: {
      addJob: (state, action) => {
        //console.log(action.payload)
        console.log(state.jobs.length)
          state.jobs.push(action.payload);
      },
      deleteJob: (state, action) =>{
            state.jobs = state.jobs.filter(a => a.id !== action.payload.id)
      },
      saveJob :(state, action) => {
          state.jobs = state.jobs.filter(a => a.id !== action.payload.id);
          console.log(action.payload.id)
          state.jobs.push(action.payload);
      }
    },
  });
  export const {addJob, deleteJob, saveJob} =  jobsSlice.actions;
  export default jobsSlice.reducer
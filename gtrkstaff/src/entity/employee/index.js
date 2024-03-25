import { createSlice } from "@reduxjs/toolkit";
export const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: []
    },
    reducers: {
      addStaff: (state, action) => {
          state.employees.push(action.payload);
      },
      deleteStaff: (state, action) =>{
            //console.log(action.payload);
            state.employees = state.employees.filter(a => a.lastName !== action.payload)
      },
      saveStaff :(state, action) => {
          state.employees = state.employees.filter(a => a.snils !== action.payload.snils);
          state.employees.push(action.payload);
      }
    },
  });
  export const {addStaff, deleteStaff, saveStaff, getStaffById} =  employeesSlice.actions;
  export default employeesSlice.reducer
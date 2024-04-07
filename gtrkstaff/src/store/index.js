import { configureStore } from '@reduxjs/toolkit';
import employeesSlice  from '../entity/employee';
import  departamentsSlice  from '../entity/departament';
import  jobsSlice from '../entity/job';
export const store = configureStore({
  reducer: {
    employees : employeesSlice,
    departaments: departamentsSlice,
    jobs: jobsSlice,
  },
  devTools: true,
})
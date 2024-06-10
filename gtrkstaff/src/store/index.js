import { configureStore } from '@reduxjs/toolkit';
import employeesSlice  from '../entity/employee';
import  departamentsSlice  from '../entity/departament';
import  jobsSlice from '../entity/job';
import  shedsSlice from '../entity/shedule';
export const store = configureStore({
  reducer: {
    employees : employeesSlice,
    departaments: departamentsSlice,
    jobs: jobsSlice,
    sheds: shedsSlice,
  },
  devTools: true,
})
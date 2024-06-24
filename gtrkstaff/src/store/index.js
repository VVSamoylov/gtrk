import { configureStore } from '@reduxjs/toolkit';
import employeesSlice  from '../entity/employee';
import  departamentsSlice  from '../entity/departament';
import  jobsSlice from '../entity/job';
import  shedsSlice from '../entity/shedule';
import  notworkSlice from '../entity/notwork';
export const store = configureStore({
  reducer: {
    employees : employeesSlice,
    departaments: departamentsSlice,
    jobs: jobsSlice,
    sheds: shedsSlice,
    notworks: notworkSlice,  
  },
  devTools: true,
})
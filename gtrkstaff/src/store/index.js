import { configureStore } from '@reduxjs/toolkit';
import employeesSlice  from '../entity/employee';
import  departamentsSlice  from '../entity/departament';
export const store = configureStore({
  reducer: {
    employees : employeesSlice,
    departaments: departamentsSlice,
  },
  devTools: true,
})
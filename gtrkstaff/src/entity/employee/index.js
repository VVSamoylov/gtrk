import { buildCreateSlice, asyncThunkCreator } from "@reduxjs/toolkit";
const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator }
  })
export const employeesSlice = createSliceWithThunks({
    name: 'employees',
    initialState: {
        employees: [],
        status: null,
        error: null
    },
    reducers: (create) => ( {
        addStaff: create.reducer( (state, action) => {
          state.employees.push(action.payload);
        }),
        deleteStaff: create.reducer( (state, action) =>{
            //console.log(action.payload);
            state.employees = state.employees.filter(a => a.lastName !== action.payload)
        }),
        saveStaff :create.reducer((state, action) => {
          state.employees = state.employees.filter(a => a.snils !== action.payload.snils);
          state.employees.push(action.payload);
        }),
    
        fetchGetAllEmployee: create.asyncThunk(
            async (_, thunkApi) => {
                try{
                    const urlGetAll = `${document.location.protocol}/employee/getallemployee`;
                    //const urlGetAll = `http://localhost:8080/employee/getallemployee`;
                    const res = await fetch(urlGetAll);
                    //console.log("rest ok!!");
                    return await res.json();
                }catch(ex){
                    return thunkApi.rejectWithValue(ex.message); 
                }
            },
            {
                pending: (state) => {
                    state.status = 'loading';
                    state.error = null;
                },
                rejected: (state, action) => {
                    state.status = 'reject';
                    state.error = action.payload ?? action.error;
                },
                fulfilled: (state, action) => {
                    state.status = 'ok';
                    console.log(action.payload);
                    state.employees.push(action.payload)
                },
            }
        ),
      /// 
      
        fetchDeleteEmployee: create.asyncThunk(
            async (id, thunkApi) => {
                try{
                    const urlDelete = `${document.location.protocol}/employee/delemployee/${id}`;
                    const response = await fetch(urlDelete,
                        {method: 'DELETE'}
                    );
                    if(!response.ok){
                        throw new Error('Ошибка удаления сотрудника');
                    }
                    thunkApi.dispatch(deleteStaff(id));
                }catch(ex){
                    return thunkApi.rejectWitchValue(ex.message);
                }
            },
            {
                pending: (state) => {
                    state.status = 'loading';
                    state.error = null;
                },
                rejected: (state, action) => {
                    state.status = 'reject';
                    state.error = action.payload ?? action.error;
                },
                fulfilled: (state, action) => {
                    state.status = 'ok';
                     //state.employees.push(action.payload)
                },
            }
     
        )
    })  
});

  export const {addStaff, deleteStaff, saveStaff, getStaffById, fetchGetAllEmployee, fetchDeleteEmployee} =  employeesSlice.actions;
  export default employeesSlice.reducer
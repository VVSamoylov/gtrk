export const fetchDeleteEmployee = async (id)=> {
                try{
                    const urlDelete = `${document.location.protocol}/employee/delemployee/${id}`;
                    const response = await fetch(urlDelete,
                        {method: 'DELETE'}
                    );
                    if(!response.ok){
                        throw new Error('Ошибка удаления сотрудника');
                    }
                    return response;
                }catch(ex){
                    console.log(ex.message);
                }
            }
export const   fetchGetAllEmployee = async () => {
                try{
                    const urlGetAll = `${document.location.protocol}/employee/getallemployee`;
                    //const urlGetAll = `http://localhost:8080/employee/getallemployee`;
                    const res = await fetch(urlGetAll).then(responce => responce.json());
                    console.log("rest ok!!", res);
                    return res;
                }catch(ex){
                    console.log(ex.message); 
                    
                }
            }
//TODO
export const   fetchAddEmployee = async () => {
                try{
                    const urlGetAll = `${document.location.protocol}/employee/getallemployee`;
                    //const urlGetAll = `http://localhost:8080/employee/getallemployee`;
                    const res = await fetch(urlGetAll);
                    //console.log("rest ok!!");
                    return await res.json();
                }catch(ex){
                    console.log(ex.message); 
                    
                }
            }
                
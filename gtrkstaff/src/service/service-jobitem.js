export const fetchDeleteJobItem = async (id)=> {
    try{
        const urlDelete = `${document.location.protocol}/position/delemployee/${id}`;
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
export const   fetchGetAllJobItem = async () => {
    try{
        const urlGetAll = `${document.location.protocol}/position/getall`;
        //const urlGetAll = `http://localhost:8080/position/getall`;
        const res = await fetch(urlGetAll).then(responce => responce.json());
        console.log("rest ok!!", res);
        return res;
    }catch(ex){
        console.log(ex.message); 
        
    }
}
//TODO
export const   fetchAddJobItem = async () => {
    try{
        const urlGetAll = `${document.location.protocol}/position/addposition`;
        //const urlGetAll = `http://localhost:8080/position/addposition`;
        const res = await fetch(urlGetAll);
        //console.log("rest ok!!");
        return await res.json();
    }catch(ex){
        console.log(ex.message); 
        
    }
}
    
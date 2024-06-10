export const fetchDeleteShedule = async (id)=> {
    try{
        const urlDelete = `${document.location.protocol}/workschedule/deleteworkschedule/${id}`;
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
export const   fetchGetAllShedule = async () => {
    try{
        const urlGetAll = `${document.location.protocol}/workschedule/getall`;
        //const urlGetAll = `http://localhost:8080/workschedule/getall`;
        const res = await fetch(urlGetAll).then(responce => responce.json());
        console.log("rest ok!!", res);
        return res;
    }catch(ex){
        console.log('Exeption rest', ex.message); 
        return [];
        
    }
}
//TODO
export const   fetchAddShedule = async () => {
    try{
        const urlGetAll = `${document.location.protocol}/workschedule/addworkschedule`;
        //const urlGetAll = `http://localhost:8080/workschedule/addworkschedule`;
        const res = await fetch(urlGetAll);
        //console.log("rest ok!!");
        return await res.json();
    }catch(ex){
        console.log(ex.message); 
        
    }
}
    
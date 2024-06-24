export const fetchDeleteNotWorking = async (id)=> {
    try{
        const urlDelete = `${document.location.protocol}/notworking/notworking/${id}`;
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
export const   fetchGetAllNotWorking = async () => {
    try{
        const urlGetAll = `${document.location.protocol}/notworking/getall`;
        //const urlGetAll = `http://localhost:8080/notworking/getall`;
        const res = await fetch(urlGetAll).then(responce => responce.json());
        console.log("rest ok!!", res);
        return res;
    }catch(ex){
        console.log(ex.message); 
        
    }
}
//TODO
export const   fetchAddNotWorking = async () => {
    try{
        const urlGetAll = `${document.location.protocol}/notworking/addnotworking`;
        //const urlGetAll = `http://localhost:8080/depart/getallemployee`;
        const res = await fetch(urlGetAll);
        //console.log("rest ok!!");
        return await res.json();
    }catch(ex){
        console.log(ex.message); 
        
    }
}
    
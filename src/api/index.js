const getUser=async ()=>{
    const url='https://randomuser.me/api/';
    try{
        const response=await fetch(url);
        if(!response.ok){
            throw new Error("Error || "+response.status);
        }
        return await response.json();
    }
    catch(err){
        console.log("Error || "+err);
    }
};

export default getUser;
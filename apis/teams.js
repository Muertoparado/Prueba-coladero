let headers = new Headers({"Content-Type": "application/json"});
let puerto = 4005;
//json-server --watch db.json -p 4005 
const getTeamsAll= async ()=>{
    console.log("get");
    let config={
        method:"GET",
        headers:headers
    };
    return await (await fetch(`http://localhost:${puerto}/teams`, config)).json();
    
}

const getTeamsId= async (arg)=>{
    console.log("get");
    let config={
        method:"GET",
        headers:headers
    };
    return await (await fetch(`http://localhost:${puerto}/teams/${arg.id}`, config)).json();
    
}

const postTeams = async (arg)=>{
    console.log("post");
    let config ={
        method:"POST",
        headers : headers,
        body:JSON.stringify(arg)
    };
    return await (await fetch(`http://localhost:${puerto}/teams/${arg.id}`, config)).json();
}

const deleteTeams = async (arg)=>{
    console.log("delete");
     let config ={
        method:"DELETE",
        headers : headers,
    };
    return await (await fetch(`http://localhost:${puerto}/teams/${arg.id}`, config)).json();

}
const putTeams = async (arg)=>{
    console.log("put");
     let config ={
        method:"PUT",
        headers : headers,
       body:JSON.stringify(arg)
    };
    return await (await fetch(`http://localhost:${puerto}/teams/${arg.id}`, config)).json();

}

export default {
    getTeamsAll,
    postTeams,
    deleteTeams,
    putTeams,
    getTeamsId
}
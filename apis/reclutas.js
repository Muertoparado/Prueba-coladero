let headers = new Headers({"Content-Type": "application/json"});
let puerto = 4005;
//json-server --watch db.json -p 4005 
const getReclutasAll= async ()=>{
    console.log("get");
    let config={
        method:"GET",
        headers:headers
    };
    return await (await fetch(`http://localhost:${puerto}/reclutas`, config)).json();
    
}

const getReclutaId= async (arg)=>{
    console.log("get");
    let config={
        method:"GET",
        headers:headers
    };
    return await (await fetch(`http://localhost:${puerto}/reclutas/${arg.id}`, config)).json();
    
}

const postRecluta = async (arg)=>{
    console.log("post");
    let config ={
        method:"POST",
        headers : headers,
        body:JSON.stringify(arg)
    };
    return await (await fetch(`http://localhost:${puerto}/reclutas/${arg.id}`, config)).json();
}

const deleteRecluta = async (arg)=>{
    console.log("delete");
     let config ={
        method:"DELETE",
        headers : headers,
    };
    return await (await fetch(`http://localhost:${puerto}/reclutas/${arg.id}`, config)).json();

}
const putRecluta = async (arg)=>{
    console.log("put");
     let config ={
        method:"PUT",
        headers : headers,
       /* body:JSON.stringify(arg) */
    };
    return await (await fetch(`http://localhost:${puerto}/reclutas/${arg.id}`, config)).json();

}

export default {
    getReclutasAll,
    postRecluta,
    deleteRecluta,
    putRecluta,
    getReclutaId
}
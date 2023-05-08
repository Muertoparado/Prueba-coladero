let headers = new Headers({"Content-Type": "application/json"});
let puerto = 4005;
//json-server --watch db.json -p 4005 
const getSkillAll= async ()=>{
    console.log("get");
    let config={
        method:"GET",
        headers:headers
    };
    return await (await fetch(`http://localhost:${puerto}/skill`, config)).json();
    
}

const getSkillId= async (arg)=>{
    console.log("get");
    let config={
        method:"GET",
        headers:headers
    };
    return await (await fetch(`http://localhost:${puerto}/skill/${arg.id}`, config)).json();
    
}

const postSkill = async (arg)=>{
    console.log("post");
    let config ={
        method:"POST",
        headers : headers,
        body:JSON.stringify(arg)
    };
    return await (await fetch(`http://localhost:${puerto}/skill/${arg.id}`, config)).json();
}

const deleteSkill = async (arg)=>{
    console.log("delete");
     let config ={
        method:"DELETE",
        headers : headers,
    };
    return await (await fetch(`http://localhost:${puerto}/skill/${arg.id}`, config)).json();

}
const putSkill = async (arg)=>{
    console.log("put");
     let config ={
        method:"PUT",
        headers : headers,
       body:JSON.stringify(arg)
    };
    return await (await fetch(`http://localhost:${puerto}/skill/${arg.id}`, config)).json();

}

export default {
    getSkillAll,
    postSkill,
    deleteSkill,
    putSkill,
    getSkillId
}
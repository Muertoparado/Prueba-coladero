import skill from "../apis/skill.js";

self.addEventListener("message", (e)=>{
    console.log("e.data.type:", e.data.type);
    let res = skill[`${e.data.type}`]((e.data.args) ? e.data.args : undefined);
    Promise.resolve(res).then(res=>postMessage(res));
})
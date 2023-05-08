import teams from "../apis/teams.js";

self.addEventListener("message", (e)=>{
    let res = teams[`${e.data.type}`]((e.data.argt) ? e.data.argt : undefined);
    Promise.resolve(res).then(res=>postMessage(res));
})
import config  from "../config/config.js";

export default class registroSkill extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await (await fetch(config.uri(registroSkill.url))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    handleEvent(e){
        e.preventDefault();
        (e.type==="submit") ? this.wsSkill(e) : undefined;
    }

    wsSkill(e){
        let ws = new Worker("../config/wsSkill.js", {type:"module"});
        let data = Object.fromEntries(new FormData(e.target));
        switch (e.submitter.dataset.valor){
            case "gets":
                ws.postMessage({type:"getSkillAll"});
                break;
            case "posts":
                ws.postMessage({type:"postSkill", args:data});
                break;
            case "deletes":
                ws.postMessage({type:"deleteSkill", args:data});
                break;
            case "puts":
                ws.postMessage({type:"putSkill", args:data});
                break;
            case "searchs":
                ws.postMessage({type:"getSkillId", args:data});
                break;

            default:
                break;
        }
        ws.addEventListener("message", (e)=>{
            console.log(e.data);
            ws.terminate();
        })
    }

    static get observedAttributes(){
        return ['data-accion'];
    }
    
    atributeChangedCallback(id,nombre){
        console.log("dato");
        console.log(id,nombre);
        console.log(this.dataset.accion);
    }
    connectedCallback(){
        Promise.resolve(registroSkill.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.form=this.shadowRoot.querySelector("#skill");
            this.form.addEventListener("submit",this.handleEvent.bind(this));
        })

    } 
}
customElements.define(config.name(registroSkill.url), registroSkill);
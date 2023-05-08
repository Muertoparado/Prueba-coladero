import config  from "../config/config.js";

export default class registroRecluta extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await (await fetch(config.uri(registroRecluta.url))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    handleEvent(e){
        e.preventDefault();
        (e.type==="submit") ? this.wsReclutas(e) : undefined;
    }

    wsReclutas(e){
        let ws = new Worker("../config/wsReclutas.js", {type:"module"});
        let data = Object.fromEntries(new FormData(e.target));
        switch (e.submitter.dataset.valor){
            case "get":
                ws.postMessage({type:"getReclutasAll"});
                break;
            case "post":
                ws.postMessage({type:"postRecluta", arg:data});
                break;
            case "delete":
                ws.postMessage({type:"deleteRecluta", arg:data});
                break;
            case "put":
                ws.postMessage({type:"putRecluta", arg:data});
                break;
            case "search":
                ws.postMessage({type:"getReclutaId", arg:data});
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
    
    atributeChangedCallback(id,nombre, edad,telefono, email,fnacimiento,identificacion,fingreso,idteam){
        console.log("dato");
        console.log(id,nombre, edad,telefono, email,fnacimiento,identificacion,fingreso,idteam);
        console.log(this.dataset.accion);
    }
    connectedCallback(){
        Promise.resolve(registroRecluta.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.form=this.shadowRoot.querySelector("#reclutas");
            this.form.addEventListener("submit",this.handleEvent.bind(this));
        })

    } 
}

customElements.define(config.name(registroRecluta.url), registroRecluta);
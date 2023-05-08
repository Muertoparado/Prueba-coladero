import config  from "../config/config.js";

export default class registroTeam extends HTMLElement{
    static url = import.meta.url
    static async components(){
        return await (await fetch(config.uri(registroTeam.url))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    handleEvent(e){
        e.preventDefault();
        (e.type==="submit") ? this.wsTeams(e) : undefined;
    }

    wsTeams(e){
        let ws = new Worker("../config/wsTeams.js", {type:"module"});
        let data = Object.fromEntries(new FormData(e.target));
        switch (e.submitter.dataset.valor){
            case "gett":
                ws.postMessage({type:"getTeamsAll"});
                break;
            case "postt":
                ws.postMessage({type:"postTeams", argt:data});
                break;
            case "deletet":
                ws.postMessage({type:" deleteTeams", argt:data});
                break;
            case "putt":
                ws.postMessage({type:"putTeams", argt:data});
                break;
            case "searcht":
                ws.postMessage({type:"getTeamsId", argt:data});
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
    
    atributeChangedCallback(id,nombre, trainer){
        console.log("dato");
        console.log(id,nombre,trainer);
        console.log(this.dataset.accion);
    }
    connectedCallback(){
        Promise.resolve(registroTeam.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.form=this.shadowRoot.querySelector("#teams");
            this.form.addEventListener("submit",this.handleEvent.bind(this));
        })

    } 
}

customElements.define(config.name(registroTeam.url), registroTeam);
const results = document.querySelector("#renderrecluta");
const btnid =document.querySelector("#btnteam");
const busteam =document.querySelector("#buscarteam");
const renteam =document.querySelector("#renteam");
const fedad= document.querySelector("#fedad");
const selectreclutas = document.querySelector("#selectreclutas");
let puerto=4005;

const buscarteam=async (id)=>{
    const team = await fetch(`http://localhost:${puerto}/reclutas/${id}`);
    const datapag = await team.json();
    console.log(datapag);
    return datapag;
    
  }

const buscaredad = async (edad)=>{
    const pag= await fetch(`http://localhost:\${puerto}/reclutas?edad=${edad}`);
    const dataedad = await pag.json();
    console.log(dataedad);
    return dataedad;
}

(async () =>{
    
    const response = await fetch(`http://localhost:${puerto}/reclutas`); 
    console.log(response);
    
    const data = await response.json();
     console.log(data);
     for (let i = 0; i < data.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="text-center" style="width: 18rem;">
        <div class="m-3">
            <h1>${data[i].nombre}</h1>
            <p>Id: ${data[i].id}</p>
            <p>Edad: ${data[i].edad}</p>
            <p>Telefono: ${data[i].telefono}</p>
            <p>Email: ${data[i].email}</p>
            <p>Fecha nacimiento: ${data[i].fnacimiento}</p>
            <p>Identificacion: ${data[i].identificacion}</p>
            <p>Fecha ingreso: ${data[i].fingreso}</p>
            <p>Id team: ${data[i].idteam}</p>  
        </div>
        </div>
       `;
       results.appendChild(card);
       };
   
})();

 (async () => {
    const select= await fetch(`http://localhost:${puerto}/skill`);
    const data = await select.json();
    data.forEach(element => {
        selectreclutas.insertAdjacentHTML("beforeend", `
        <option value="${element.nombre}" id="${element.id}">${element.nombre}</option>
        `)
        
    });
})(); 
selectreclutas.addEventListener("change", async ()=>{
    const select= await fetch(`http://localhost:${puerto}/skill?_sort=name&_order=asc`);
    const buscart = await select.json();
     for (let i = 0; i < buscart.length; i++) { 
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `

    <div class="text-center" style="width: 18rem;">
    <div class="m-3">
        <h1>${buscart.nombre}</h1>
        <p>Id: ${buscart.id}</p>
        <p>Edad: ${buscart.edad}</p>
        <p>Telefono: ${buscart.telefono}</p>
        <p>Email: ${buscart.email}</p>
        <p>Fecha nacimiento: ${buscart.fnacimiento}</p>
        <p>Identificacion: ${buscart.identificacion}</p>
        <p>Fecha ingreso: ${buscart.fingreso}</p>
        <p>Id team: ${buscart.idteam}</p>  
    </div>
    </div>
    
    `;
    renteam.appendChild(card);
     }
});

btnid.addEventListener('click', async () => {
    console.log("id");
  
    const buscart = await buscarteam(busteam.value);
    console.log(buscart);
    /* for (let i = 0; i < buscart.length; i++) { */
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `

    <div class="text-center" style="width: 18rem;">
    <div class="m-3">
        <h1>${buscart.nombre}</h1>
        <p>Id: ${buscart.id}</p>
        <p>Edad: ${buscart.edad}</p>
        <p>Telefono: ${buscart.telefono}</p>
        <p>Email: ${buscart.email}</p>
        <p>Fecha nacimiento: ${buscart.fnacimiento}</p>
        <p>Identificacion: ${buscart.identificacion}</p>
        <p>Fecha ingreso: ${buscart.fingreso}</p>
        <p>Id team: ${buscart.idteam}</p>  
    </div>
    </div>
    
    `;
    renteam.appendChild(card);

    });

    btnedad.addEventListener('click', async (edad)=>{
        console.log("ad");
        const filteredData = data.filter((reclutas) => {
            for (let i = 0; i < filteredData.length; i++) {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                <div class="text-center" style="width: 18rem;">
                <div class="m-3">
                    <h1>${data[i].nombre}</h1>
                    <p>Id: ${data[i].id}</p>
                    <p>Edad: ${data[i].edad}</p>
                    <p>Telefono: ${data[i].telefono}</p>
                    <p>Email: ${data[i].email}</p>
                    <p>Fecha nacimiento: ${data[i].fnacimiento}</p>
                    <p>Identificacion: ${data[i].identificacion}</p>
                    <p>Fecha ingreso: ${data[i].fingreso}</p>
                    <p>Id team: ${data[i].idteam}</p>  
                </div>
                </div>
               `;
               fedad.appendChild(card);
               };
            return reclutas.edad < edad && reclutas.idteam === "1";
          });
    })

    

    
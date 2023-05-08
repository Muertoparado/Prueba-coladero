const renteam = document.querySelector("#renderteams");
let puerto=4005;


(async () =>{
    
    const teamr = await fetch(`http://localhost:${puerto}/teams`); 
    console.log(teamr);
    
    const data = await teamr.json();
     console.log(data);
     for (let i = 0; i < data.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="text-center" style="width: 18rem;">
        <div class="m-3">
            <h1>${data[i].nombre}</h1>
            <p>Id: ${data[i].id}</p>
        </div>
        </div>
       `;
       renteam.appendChild(card);
       };
   
})();
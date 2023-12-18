let datos = [];

document.addEventListener("DOMContentLoaded", ()=>{
    fetch("http://localhost:3000/character-info")
    .then(response => response.json())
    .then(data => {
        console.log(data[1].personajes[0].nombre);
        document.getElementById("nombre").innerHTML = data[1].personajes[0].nombre;
    });

    
});
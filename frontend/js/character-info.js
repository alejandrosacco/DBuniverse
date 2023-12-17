let datos = [];

document.addEventListener("DOMContentLoaded", ()=>{
    fetch("http://localhost:3000/character-info", {
        mode: 'cors',
    })
    .then(response => response.json())
    .then(data => datos = data)
    console.log(datos);
});
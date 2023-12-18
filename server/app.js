const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use(express.static('frontend'));
app.use(express.static('jsondata'));

app.get("/", (req, res)=>{
    res.send("hola");
});

app.get("/character-info", (req, res)=>{
    res.send(fs.readFileSync(path.join(__dirname, "/jsondata/DBZ/saiyajin/plot.json")));
});

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
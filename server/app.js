const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("../frontend"));

app.get("/", (req, res)=>{
    res.send("hola");
});

app.get("/character-info", (req, res)=>{
    res.send(fs.readFileSync(path.join(__dirname, "../jsondata/dbz-saga-saiyajin.json")));
});

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
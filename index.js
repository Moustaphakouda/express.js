
alert ("se site est actif de 6h à 18h");
const { log } = require("console");
const express = require("express");
const { setTimeout } = require("timers/promises");

const app = express();

const PORT = 5500 ;

app.get("/",(req,res) => {
    
})
app.listen(PORT,() => {
    console.log("le serveur est lance au port " + PORT)
});

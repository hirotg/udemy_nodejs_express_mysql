require('dotenv').config();

const PORT = process.env.PORT;
const express = require("express");
const app = express();

app.get("/",(req,res) =>{
    res.end("Hello World");
});

app.get("/home/index",(req,res,next) =>{
    res.status(200).send("OK");
});

app.listen(PORT, ()=>{
    console.log(`Application listening at ${PORT}`);
});
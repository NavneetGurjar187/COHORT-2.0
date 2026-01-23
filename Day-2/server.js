const express = require("express");

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("hello");
});

app.get("/about",(req,res)=>{
    res.send("My name is navneet");
});

app.listen(port,()=>{
    console.log("running on port 3000.")
});
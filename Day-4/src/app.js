const express = require("express");
const app = express();

const notes = []

app.use(express.json())

app.post("/notes",(req,res)=>{
    console.log(req.body)
    res.send("note created")
    notes.push(req.body)
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index];
    res.send("data deleted sucessfully!");
});

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].title = req.body.title;
    res.send("data update sucess fully!");
})

module.exports = app;
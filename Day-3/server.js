const express = require("express")

const app = express()
const port = 3000

const notes = [];
app.use(express.json())

app.post("/notes",(req,res)=>{
    notes.push(req.body)
    console.log(req.body)
    res.send("note created")
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.listen(port,()=>{
    console.log("server running on port 3000..")
})
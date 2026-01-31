const express = require("express")
const noteModel = require("./models/notes.models");
const { model } = require("mongoose");
const app = express();

app.use(express.json())

app.post("/notes", async (req,res)=>{
    const {title, description } = req.body

    const notes = await noteModel.create({
        title,description
    })

    res.status(201).json({
        messgae:"notes created sucessfully",
        notes
    })
})

app.get("/notes", async (req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        messgae:"note fetch sucessfully",
        notes
    })
})

app.delete("/notes/:id", async (req,res)=>{
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        messgae:"note deleted sucessfully"
    })
})

app.patch("/notes/:id", async (req,res)=>{
    const id = req.params.id
    const {description} = req.body

    await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        messgae:"update sucessfully"
    })
})


module.exports = app
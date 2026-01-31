const mongoose = require("mongoose");


const notesSchema = new mongoose.Schema({
    title:String,
    description:String
})

const noteModel = mongoose.model("motes",notesSchema)

module.exports = noteModel;
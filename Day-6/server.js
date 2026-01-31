const app = require("./src/app")
const mongoose = require("mongoose")

function conncetTodb(){
    mongoose.connect("mongodb+srv://Navneet:4V4ulwCKmL1HBlCE@cluster0.3iakoxq.mongodb.net/Day-6")
    .then(()=>{
        console.log("database connected")
    })
}

conncetTodb();


app.listen(3000,()=>{
    console.log("server running on port 3000")
})
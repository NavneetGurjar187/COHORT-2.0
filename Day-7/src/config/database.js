const mongoose = require("mongoose"); 



function createTodb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("database connected.")
    })
}

module.exports = createTodb;
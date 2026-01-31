require("dotenv").config()
const app = require("./src/app");
const createTodb = require("./src/config/database")



createTodb()

app.listen(3000,()=>{
    console.log("server running on port 3000.");
    
})


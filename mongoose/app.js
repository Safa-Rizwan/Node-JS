const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Siblingsdb").then(()=>{
    console.log("connection successfull");
}).catch((err)=>console.log(err));
const sisters = new mongoose.Schema({
    name:String,
    age: String,
    active: Boolean
})

const intro = new mongoose.model("Sister",sisters);
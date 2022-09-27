const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Siblingsdb").then(()=>{
    console.log("connection successfull");
}).catch((err)=>console.log(err));
const sisters = new mongoose.Schema({
    name:String,
    age: String,
    active: Boolean
})
// Collection creation and insertion
const intro = new mongoose.model("Sister",sisters);
const createDocument=async()=>{
    try{
const sister1= new intro({
    name:"Hooriya Rizwan",
    age:"11",
    active:true
})
const sister2= new intro({
    name:"Ariba Rizwan",
    age:"18",
    active:true
})
const result=await intro.insertMany([sister1,sister2]);
console.log(result)}
catch(error){
    console.log(error);
}}
// createDocument();

// Read Document
const getDocument=async()=>{
    try{
    const result= await intro.find().select({age:{$in:["12","11"]}});
    console.log(result)
}catch(error){
    console.log(error)
}}
// getDocument();
// Update Query
const updateDocument= async()=>{
    try{
        const result=await sisters.updateOne(('63316aa8782edbc11a14ccb0'),{$set:{name:"Safa Rizwan"}})
    }catch(error){
        console.log(error)
    }
}
updateDocument();
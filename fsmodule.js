const fs = require('fs');
// fs.readFile('file.txt','utf8',(err,data)=>{
    // console.log(err,data);
// })
// console.log("finish reading file"
// )

// Intentionally,block
// const a = fs.readFileSync("file.txt");
// console.log(a.toString())
// console.log("finish reading file")

// Non blocking I/0 module
fs.writeFile("file.txt","abcdefghijklmn",()=>{
    console.log("File has been written")
})
console.log("finish file wrting")

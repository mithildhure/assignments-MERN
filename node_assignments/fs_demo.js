// const fs = require("fs");

// fs.writeFile("node_assignments/text1.txt","Hello",(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File Created");
//     }
// });

// fs.readFile("node_assignments/text1.txt",(err,data)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });

// fs.appendFile("node_assignments/text1.txt","\nThis is new Content",(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Append Succefull");
//     }
// });

// fs.unlink("node_assignments/text1.txt",(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File Deleted");
//     }
// });

// ====================Folder==================================

// fs.mkdir("demo1",(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Folder Created");
//     }
// });

// fs.rmdir("./demo1",(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Folder Deleted");
//     }
// });
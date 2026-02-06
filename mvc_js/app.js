const express = require('express');
const router = require('./router/ProductRouter');
const { connectDb } = require('./db');

connectDb();
const app = express();

app.use(express.json());
app.use("/",router);

app.listen(4000,()=>{
    console.log("Running");
})
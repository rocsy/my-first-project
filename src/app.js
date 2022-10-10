
const express = require('express');

var port = 3000;
const app = express();

app.get('/' ,(req,res)=>{
    res.send('hello world');
});
app.listen(port , ()=>{console.log(`port no is ${port}`)});
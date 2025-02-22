const express =require('express');
const path=require('path');

const hostname="127.0.0.1";
const port=4000;

const app=express();
app.use(express.static(path.join(__dirname, '..', 'client')));
app.get("/",(req, res)=>{
  res.sendFile(path.join(__dirname,'..', 'client', 'index.html'));
})

app.listen(port,(req, res) =>{
    console.log(`server is work http://${hostname}:${port}`);
})
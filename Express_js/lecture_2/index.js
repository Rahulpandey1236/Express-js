//creating server using express

const express = require('express')

const app = express();

const port = 3002

app.get('/',(req,res) =>{  //create a route with respond hello world
     res.send("hello world")
})

app.get('/about',(req,res) =>{
    res.send("About page")
})

app.get('/contct',(req,res) =>{
    res.send("contact page")
})

app.listen(port,()=>{
    console.log("server is starting");
})
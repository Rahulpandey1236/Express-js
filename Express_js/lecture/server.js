//node js server

const http = require('http')
const PORT = 8002;
const hostname = 'localhost'

const server = http.createServer((req,res)=>{
    // res.statusCode = 200;
    // res.setHeader('content-type','text-plain')
    // res.end("server creted by Rahul pandey!")

    res.statusCode = 500
    res.setHeader('content-type','application/json')
    res.end(JSON.stringify({error:"server error"}));

})

server.listen(PORT,()=>{
console.log(`the server started at port no ${PORT} : ${hostname}`);
})
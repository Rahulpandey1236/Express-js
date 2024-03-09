//node js server

const http = require('http')

const PORT = 8008;

const server = http.createServer((req,res) =>{
    //About age
    //Contact page
    //Product page
    //RESt-->

    if(req.url=='/'){
        res.statusCode = 200
        res.setHeader('content-page','application/json')
        res.end("welcomr to rahul server")
    }



else if(req.url == '/about'){
    res.statusCode = 200
    res.setHeader('content-page','application/json')
    res.end("welcomr to about page")
}

else if(req.url == '/contact'){
    res.statusCode = 200
    res.setHeader('content-page','application/json')
    res.end("welcomr to contact page")
}
else if(req.url == '/products'){

    const options = {
        hostname : 'fakestoreapi.com',
        path:'/products/1',
        method:'GET'
    }
    
    const apireq = http.request(options,(apiRes) =>{
        apiRes.on("data",(data) =>{
            res.statusCode = 200
            res.setHeader('content-type','application/json')
            console.log(data.toString()); //buffer data to string
        })
    });
    
    apireq.on("error",() =>{
        console.log(e);
    });
    apireq.end()




    // res.statusCode = 200
    // res.setHeader('content-type','application/json')
    // res.end(JSON.stringify({productname:"product1"}))
}
else{
    res.end("you are try to hit a wrong url")
}

})


server.listen(PORT,()=>{
console.log("the server is starting ");
})
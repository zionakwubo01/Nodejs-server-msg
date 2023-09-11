const http = require("http")


const port = 2000

const App = http.createServer((req, res)=>{
   if(req.url==="/"){
    res.writeHead(200, {"text-content": "text/html"}),
    res.write("<html><Body><p>this is home page</p></Body></html>"),
    res.end()
   }else if(req.url === "/about"){
    res.writeHead(200, {"text-content": "text/html"}),
    res.write("<html><Body><p>this is about page</p></Body></html>"),
    res.end()
   }else if(req.url === "/contacts"){
    res.writeHead(200, {"text-content": "text/html"}),
    res.write("<html><Body><p>this is contacts page</p></Body></html>"),
    res.end()
   }else res.end("invalid request")
})

App.listen(port, ()=>{
    console.log("server is up and running")
})



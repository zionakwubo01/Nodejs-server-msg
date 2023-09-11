// import http, {ServerResponse, IncomingMessage} from 'http'

// const port : number = 2000

// const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
//     res.writeHead(200),
//     res.write("server up and runniong"),
//     res.end()
// })

// server.listen(port ,()=>[

// ])







// import http, {ServerResponse, IncomingMessage} from "http";

// const port: number = 2000

// const server = http.createServer((req: IncomingMessage, res:ServerResponse<IncomingMessage>) => {
//     res.writeHead(200)
//     res.write("Server is up and running"),
//     res.end()
// })

// server.listen(port, () => {
//     console.log("listen to port");
// })




// const make: string = 'ford'
// const model: string = 'mustang'
// const car = {make, model}
// console.log(car)

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]

// const comb = [...arr1 , ...  arr2]
// console.log(comb)


import http, { IncomingMessage, ServerResponse } from 'http'
import fs from 'fs'
import path from 'path'


const port = 2000

const App = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
    res.writeHead(200);

    let connect: string = "/site";

    switch(req.url){
        case "/" :
        connect += "about.html";
        res.statusCode= 200;
        break;

        case "/" :
            connect += "services.html";
            res.statusCode= 200;
            break;

            case "/" :
                connect += "acontacts.html";
                res.statusCode= 200;
                break;


    }

    fs.readFile(path.join(__dirname, connect),"utf-8", (error, data)=>{
    if(error){
        console.log("an error occurred", error)
        res.end();
    }else{
        res.write(data);
        res.end();
    }
 
    })

})

App.listen(port, ()=> {
    console.log("port is up and running")
})
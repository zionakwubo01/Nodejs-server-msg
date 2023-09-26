// // import http, {ServerResponse, IncomingMessage} from 'http'

// // const port : number = 2000

// // const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
// //     res.writeHead(200),
// //     res.write("server up and runniong"),
// //     res.end()
// // })

// // server.listen(port ,()=>[

// // ])







// // import http, {ServerResponse, IncomingMessage} from "http";

// // const port: number = 2000

// // const server = http.createServer((req: IncomingMessage, res:ServerResponse<IncomingMessage>) => {
// //     res.writeHead(200)
// //     res.write("Server is up and running"),
// //     res.end()
// // })

// // server.listen(port, () => {
// //     console.log("listen to port");
// // })




// // const make: string = 'ford'
// // const model: string = 'mustang'
// // const car = {make, model}
// // console.log(car)

// // const arr1 = [1,2,3]
// // const arr2 = [4,5,6]

// // const comb = [...arr1 , ...  arr2]
// // console.log(comb)


// import http, { IncomingMessage, Server, ServerResponse } from 'http' 
// import fs, { stat } from 'fs'
// import path from 'path'
// import { error } from 'console'
// import { connected, constrainedMemory } from 'process'
// import { deflateSync } from 'zlib'
// import { isUtf8 } from 'buffer'

// // const Database = [
// //     {
// //         id:"1",
// // name: "zion akwubo",
// // stack: "full stack"
// //     },
// //     {
// //         id:"2",
// // name: "wisdom p",
// // stack: "full stack"
// //     },
// //     {
// //         id:"1",
// // name: "ayomide",
// // stack: "full stack"
// //     },
// // ]


// // const port = 2000

// // const App = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
// //     res.writeHead(200);

// //     let connect: string = "site/";

// //     switch(req.url){
// //         case "/" :
// //         connect += "home.html";
// //         res.statusCode= 200;
// //         break;

// //         case "/" :
// //             connect += "service.html";
// //             res.statusCode= 200;
// //             break;
// //         case "/" :
// //             connect += "about.html";
// //             res.statusCode= 200;
// //             break;

// //             case "/" :
// //                 connect += "contacts.html";
// //                 res.statusCode= 200;
// //                 break;

// //                 default: 
// //                     connect += "404.html"}

// //     fs.readFile(path.join(__dirname, connect),"utf-8", (error, data)=>{
// //     if(error){
// //         console.log("an error occurred", error)
       
// //     }else{
// //        / res.write(data);
// //         res.end();
// //     }
 
// //     })

// // })

// // App.listen(port, ()=> {
// //     console.log("port is up and running")


// // if(req.url === "/" && req.method === "GET" && res.statusCode === 200) {
// // res.setHeader("Content-Type", "application/json");
// // res.write(JSON.stringify(Database))
// // res.end();
// // } 

// // res.end();

// // })

// // App.listen(port, ()=>{
// //     console.log("port is up and running", port)
// // })





// // const port: number = 2000

// // const APP = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
// //     res.writeHead(200)


// //     let connect = "site/"

// //     switch(req.url){
// //       case "/":
// //       res.statusCode=200;
// //       connect+="/home.html";
// //       break;

// //       case "/" :
// //         connect += "/about.html";
// //         res.statusCode = 200;
// //         break;

// //         case "/":
// //             connect+="/service.html";
// //             res.statusCode = 200;
// //             break;

// //         case "/":
// //             connect+="/contacts.html";
// //             res.statusCode = 200;
// //             break;

// //             default :
// //             connect += "404.html"
// //             res.statusCode = 404;
// //             break;


// //             fs.readFile(path.join(__dirname, connect),"utf-8", (error, data)=>{
// //               if(error){
// //                 console.log("error occurred", error) 
// //               }else{
// //                 res.write(data)
// //                 res.end()
// //               }
// //     })
// //     }
// //   })

// //  APP.listen(port, ()=>{
// //   console.log("port is up and running", port)
// //  })



// // fs.unlink(path.join(__dirname, "../Class/Class.txt",),(error):void=>{
// //   if(error){
// //     console.log(error)
// //   }else{
// //     console.log("success")
// //   }
// // } )

// // let port: number = 2000

// // let Database = [
// //   {
// //     name: "zion",
// //     clas: "set08",
// //   },
// //   {
// //     name: "ayo",
// //     clas: "set08",
// //   },
// //   {
// //     name: "ekene",
// //     clas: "set08",
// //   },

// // ]

// // const App = http.createServer((req:IncomingMessage, res: ServerResponse<IncomingMessage>)=>{


  
// // if(req.url === "/" && req.method === "GET" && res.statusCode === 200) {
// // res.setHeader("Content-Type", "application/json");
// // res.write(JSON.stringify(Database))
// // res.end(                                                                                                               );
// // } 

// // res.end();

// // req.

// // })

// // App.listen(port, ()=>{
// //   console.log("port is up and runnning",port)
// // })
 
// // import os from 'os'

// // const port: number = 2000

// // const App = http.createServer((req: IncomingMessage,res:ServerResponse<IncomingMessage>)=>{
// //  const user = req.headers['user-agent']

// //  res.writeHead(200, {'content-type': 'text/plain'});
// //  res.write(`you are using ${user}`);
// //  res.end()
  
// // })


// // App.listen(port, ()=>{
// //   console.log("port is up and running")
// // })
// interface imessage{
//   message: string
//   success:boolean
//   data: null | {} | {}[]
// }

// interface datai {
//   name: string
//   id: number
//   phone: number
//   class: string
//   stack: string
// }

// const Data: datai[]= [
//   {
//   name: "zion akwubo",
//   id: 1,
//   phone: 7016606331,
//   class: "set08",
//   stack: 'fullstack'
// },
//   {
//   name: "joan ewuzie",
//   id: 2,
//   phone: 7016606331,
//   class: "set08",
//   stack: 'halfstack'
// },
//   {
//   name: "tobi default",
//   id: 3,
//   phone: 7016606331,
//   class: "set08",
//   stack: 'middlestack'
// },

// ]


// const port:number = 2000

// const server = http.createServer((req:IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
//  res.setHeader("Content-Type", "Application/Json")
//  const {method, url} = req
//  let status: number = 404

//  let response:imessage = {
//   message: "failed",
//   success: false,
//   data: null
//  }

// const Container: any = []
// req.on("data", (chunk: any)=>{
//  Container.push(chunk)
// })
// .on("end", ()=>{

// })

// //Get
// if(url == "/" && method === "GET"){
//   status = 200
//   response.message = "all set 08 student "
//   response.success = true
//   response.data = Data
//   res.write(JSON.stringify({status, response}))
//   res.end()
// }
// //POST
// // if(url === "/" && method==="POST"){
// //   status = 201
// //   const body = JSON.parse(Container)
// //   Data.push(body)
// //   response.message = 'successfuly added'
// //   response.data = Data
// //   response.success = true
// //   res.write(JSON.stringify({status, response}))
// //   res.end()
// // }


// //delete 

// if(method === "DELETE"){
//   let DELL: any = url?.split("/")[3];
//   let dellnumber = parseInt(DELL);


//   let WDel = Data.some((el: any)=>{
// return el?.id === dellnumber
//   })
// if(WDel === false){
//   status = 404
// }else{
//    Data = Data.map((el:any)=>{
//     if(el?.id === dellnumber) {
//       //el = null will remove the object and changr it to null
//      el = null 
//     }

//     return el
//   })
//   response.data = Data
//   response.message ="deleted successfully"
//   response.success = true
//   response.success = true
// res.write(JSON.stringify({status, response}))
//  res.end()
// }

// }
// })

// server.listen(port, ()=>{
//   console.log(`port ${port} is up and running`)
// }) 

import http, { IncomingMessage, ServerResponse } from "http" 
import { json } from "node:stream/consumers"
const port:number = 2000
interface iuserdata{
  id: number,
  name: string,
  class: string
}

interface ires{
  message: string,
  success: boolean,
  data: null | [] |{}[]
}


let UserData: iuserdata[]= [
  {
    id: 1,
    name: "zion",
    class: "basic2"
  },
  {
    id: 2,
    name: "ayo",
    class: "basic3"
  },
  {
    id: 3,
    name: "joan",
    class: "basic4"
  },
  {
    id: 4,
    name: "ahmed",
    class: "basic5"
  },
  {
    id: 5,
    name: "wisdom",
    class: "basic6"
  },
]


const AApp = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
  res.setHeader("content-type", "Application/json")
  const {method, url} = req
let status:number = 404
  let Serverrep: ires ={
    message: "failed to work",
    success: false,
    data: null
  }

  const Database:any = []
 req
 .on("data", (chunk:any)=>{
  Database.push(chunk)
 }).on("end", ()=>{

  })
 })
 

AApp.listen(port, ()=>{
  console.log("up and running")
})
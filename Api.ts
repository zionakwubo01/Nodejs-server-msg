

// import axios from "axios"
// import http, { IncomingMessage, ServerResponse } from "http"
// let port: number = 3909

// interface iResponse {
//     message: string,
//     success: boolean,
//     data: any
// }

// const App = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
//     res.setHeader("content-type", "application/json")

//     let status = 404
// let {method, url} = req

//     let response:iResponse = {
//         message: "failed",
//         success: false,
//         data : null
//     }

// if(method === "POST" && url === "/grtuserdetails"){
//     let requestbody = ''
    
//     req.on("data", (chunk)=>{
//         requestbody+=chunk
//     });
//     req.on("end",async ()=>{
//         let requestdata = JSON.parse(requestbody)

//         const {username} = requestdata;

//         if(!username || !requestdata){
//             status = 404
//             response.data = null
//             response.success = false
//             response.message = "no request data"
//             res.write(JSON.stringify({status, response}))
//             res.end();
//         }

//         const gitendpoint = await axios.get(`https://api.github.com/users/ ${username}`)

//         if(gitendpoint.status){
//             const userdetails = gitendpoint.data
//             status = 200
//             response.message = `${userdetails?.name
//             ? userdetails.name : username
//             } git details gotten`,
//             response.success = true
//             response.data = userdetails
//             res.write(JSON.stringify({status, response}))
//               res.end();
//         }else{
//             status = 404
//             response.message = "user not found"
//             response.data = null
//             response.success = false
//             res.write(JSON.stringify({status, response}))
//             res.end()
//         }
//     })
// }
// })

// App.listen(port, ()=>{
// console.log("up and running")
// })








import axios from "axios"
import http,{IncomingMessage, ServerResponse} from 'http'
import path from "path";
import fs from "fs";

const Port = 3400;

interface IMessage {
  message: string;
  sucess: boolean;
  data: null | {} | {}[];
}

const Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.setHeader("Content-Type", "application/json");

    let { method, url } = req;
    let status = 404;

    let response: IMessage = {
      message: "Failed",
      sucess: false,
      data: null,
    };

    if (method === "POST" && url === "/getgithubuserdetails") {
      let requestBody = "";

      req.on("data", (chunk) => {
        requestBody += chunk;
      });
      req.on("end", async () => {
        let requestData = JSON.parse(requestBody);

        const { username } = requestData;

        if (!username || !requestData) {
          status = 400;

          (response.message = "No request Data"),
            (response.sucess = false),
            (response.data = null);

          res.write(JSON.stringify({ status, response }));
          res.end();
        }

        const githubendpoint = await axios.get(
         ` https://api.github.com/users/${username}`
        );

        if (githubendpoint.status) {
          const userdetails = githubendpoint.data;

          status = 200;

          (response.message = `${
            userdetails?.name ? userdetails?.name : username
          } Github Details gotten`),
            (response.sucess = true),
            (response.data = userdetails);

          res.write(JSON.stringify({ status, response }));
          res.end();
        } else {
          status = 404;

          (response.message = "User not found"),
            (response.sucess = false),
            (response.data = null);

          res.write(JSON.stringify({ status, response }));
          res.end();
        }
      });
    } else {
      (response.message = "Check your Routes"),
        (response.sucess = false),
        (response.data = null);

      res.write(JSON.stringify({ status, response }));
      res.end();
    }
  }
);

Server.listen(Port, () => {
  console.log("Server is running on port", Port);
});
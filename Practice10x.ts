import http,{ IncomingMessage, ServerResponse, request } from "http";
const port:number = 4000
import axios from 'axios'
interface iResponse{
    message: string,
    success: boolean,
    data: string | [] | {}[]
}
const App = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
res.setHeader("content-type", "application/json")
let statuscode = 404
let response = {
    message: "failed",
    success: false,
    data: null
}
let {method, url} = req

if(method === "POST" && url === "/getuserdetails"){
    let requestbody = ""
    req.on('data', (el:any)=>{
        requestbody+=el
    })
    req.on('end',async ()=>{
        let requestdata = JSON.parse(requestbody)
        const {username} = requestdata

        if(!username || !requestdata){
            statuscode = 404
            response.data = null
            response.message = "no request data"
            response.success = false
            res.write(JSON.stringify({statuscode, response}))
            res.end();
        }

        const gitendpoint = await axios.get(`https://api.github.com/users/${username}`)
    
        if(gitendpoint.status){
            const userdetails = gitendpoint.data
            statuscode = 200
            response.message= userdetails?.name? userdetails.name: username
            response.success = true
            response.data = userdetails
            res.write(JSON.stringify({statuscode, response}))
            res.end()
        }else{
            statuscode = 404
            response.message = "user not found"
            response.data = null
            response.success = false
            res.write(JSON.stringify({statuscode, response}))
            res.end()
        }
    })
}
})

App.listen(port, ()=>{
    console.log(`server ${port} is up and running`)
})
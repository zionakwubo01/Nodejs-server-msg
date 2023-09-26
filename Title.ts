
import http, { IncomingMessage, ServerResponse } from 'http'
import fs from 'fs'
import path from 'path'
import axios from 'axios'
import { error } from 'console'

const Port:number = 5000

interface iResponse {
    message: string
    success: boolean
    data: any
}
const App = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>)=>{
    res.setHeader('content-type', 'application/json')
    let statuscode = 404
let {method, url} = req
    let response:iResponse = {
        message: "failed request",
        success: false,
        data : null
    }

    let Base = ""
req.on("data", (chunk)=>{
 Base+=chunk
})
req.on('end',async()=>{
if(method === "GET" && url === "/gettitles"){
  const fakestoreapi = await axios.get("https://fakestoreapi.com/products");

  if(fakestoreapi.status){
    const data = fakestoreapi.data.map((el)=>el.title)
    const titlefolder = path.join(__dirname, 'Title')

if(!fs.existsSync){
    fs.mkdir(titlefolder, (error)=>error)
}

 fs.writeFile(path.join(__dirname, "Titles", "Titles.txt"), data.toString().split('')
 .flatMap((el)=>"\n" + el).toString(),(error)=>{
    console.log(error)
 }
 );

 response.message = "title added"
 response.success = true
 response.data = data
 res.write(JSON.stringify({statuscode, response}))
  res.end()

  }else{
    statuscode=404
    response.message = "wrong"
 response.success = false
 response.data = null
 res.write(JSON.stringify({statuscode, response}))
  res.end()
  }
}

})
   
})
App.listen(Port, ()=>{
    console.log('server is up and running using port',Port)
})
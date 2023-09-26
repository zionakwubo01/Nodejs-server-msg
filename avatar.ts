
import http, { IncomingMessage, ServerResponse } from 'http'
import fs from 'fs'
import path from 'path'
import axios from 'axios'

const Port:number = 6000

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
if(method === "GET" && url === "/getavatar"){
  const fakestoreapi = await axios.get("https://fakestoreapi.com/products")

  let productdetails = fakestoreapi.data
  const productavatar = productdetails.avatar_url;
  const avatarfilename = `${fakestoreapi}_avatar.jpg`
  const avatarfolder = path.join(
    __dirname,
    "Pictures",
    avatarfilename
  )
  const getavatarurl = await axios.get(productavatar, {
    responseType: "stream",
  })
  getavatarurl.data.pipe(fs.createWriteStream(avatarfolder));
  statuscode = 200
  response.message = "images gotten"
  res.write(JSON.stringify({statuscode, response}))
  res.end()
}
})
   
})
App.listen(Port, ()=>{
    console.log('server is up and running using port',Port)
})

import http, { IncomingMessage, ServerResponse } from 'http'
import fs from 'fs'
import path from 'path'
import axios from 'axios'

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
if(method === "GET"){
    let productdetaile:any = url?.split("/")[1];
    let datavalue = parseInt(productdetaile)

    const Fakestoreapi= await axios.get("https://fakestoreapi.com/products");

    

    if(Fakestoreapi.status){
        let data = Fakestoreapi.data
        let getdata = data.filter((el)=>{
            return el.id === datavalue
        })
        statuscode = 200
        response.data = getdata
        response.success = true
        response.message = "all data gotten"
        res.write(JSON.stringify({statuscode, response}))
        res.end()
    }
}
})
   
})
App.listen(Port, ()=>{
    console.log('server is up and running using port',Port)
})
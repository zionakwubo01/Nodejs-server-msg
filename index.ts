import Event from "events"
import welcomeEvent from "./newFs"
import { isDate } from "util"

// console.log(Event)



// const emitter = new Event
// let date = new Date
// let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

 
setInterval(()=>{
    const emitter = new Event
let date = new Date
let month = date.getMonth()
let day = date.getUTCDate()
// let date = new Date
let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
let year = date.getUTCDate() + ':' + date.getMonth() + ':' + date.getUTCFullYear()
 

    const Randnumber = Math.floor(Math.random()* (9999 - 1111))+ 1111
    emitter.on("money", ()=>{
        console.log(`welcome to code lab you got in  ${time}, ${year}  your reg number is ${Randnumber}`)
        })
    
emitter.emit("money", "pleaase get me rice")
  
},2000)


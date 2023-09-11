import fs from "fs"


setInterval(()=>{
    let i = 1
    const file = fs.createWriteStream("./streamfile.txt")


for(let i=0; i < 1000; i++){  
    file.write(`this is attempt ${i++}\n`)
} 
},3000)
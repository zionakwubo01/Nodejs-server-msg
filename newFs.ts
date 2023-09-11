import { error } from "console"
import fs from "fs"
import path from "path"

const message = " welcome to codelab"


const welcomeEvent =async (pa) => {
    fs.mkdir("./newFold", (error):void=>{
        if(error)(
            console.log(error)
        )
    })

    fs.appendFile(path.join(__dirname, "newFold","fold.txt"),message,(error):void=>{
        if(error){
            console.log(error)
        }else{
            console.log("file created")
        }
    })
}

export default welcomeEvent;
 
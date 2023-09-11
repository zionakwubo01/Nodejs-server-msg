import { error } from "console"
import fs from "fs"
import path from  "path" 

// fs.mkdir("./Ass", (error):void =>{
//     if(error){
// console.log("an error in creating folder" +error)
//     }else{
//         console.log(error, "created successfully")
//     }
// })

// fs.writeFile(path.join(__dirname, "Ass", "Class.txt"),"hello people", (error):void=>{
//  if(error){
//     console.log("an error occured whilr creating file", error)
//  }else{
//     console.log("file created successfully")
//  }
// })


// fs.mkdir("./Ass3", (error):void =>{
//     if(error){
// console.log("an error in creating folder" +error)
//     }else{
//         console.log(error, "created successfully")
//     }
// })

// fs.writeFile(path.join(__dirname, "Ass3", "Class.txt"),"hello people", (error):void=>{
//  if(error){
//     console.log("an error occured whilr creating file", error)
//  }else{
//     console.log("file created successfully")
//  }
// })

// fs.mkdir("./Ass2", (error):void =>{
//     if(error){
// console.log("an error in creating folder" +error)
//     }else{
//         console.log(error, "created successfully")
//     }
// })

// fs.writeFile(path.join(__dirname, "Ass2", "Class.txt"),"hello people", (error):void=>{
//  if(error){
//     console.log("an error occured whilr creating file", error)
//  }else{
//     console.log("file created successfully")
//  }
// })

// fs.mkdir("./Ass1", (error):void =>{
//     if(error){
// console.log("an error in creating folder" +error)
//     }else{
//         console.log(error, "created successfully")
//     }
// })

// fs.writeFile(path.join(__dirname, "Ass1", "Class1.txt"),"hello people", (error):void=>{
//  if(error){
//     console.log("an error occured whilr creating file", error)
//  }else{
//     console.log("file created successfully")
//  }
// })


fs.mkdir("./Class", (error):void =>{
        if(error){
    console.log("an error in creating folder")
        }else{
            console.log("created successfully")
        } 
    })
    fs.writeFile(path.join(__dirname, "Class", "Class.txt"),"hello people", (error):void=>{
         if(error){
            console.log("an error occured whilr creating file", error)
         }else{
            console.log("file created successfully")
         }
        })

        fs.appendFile(path.join(__dirname, "Class", "Class.txt"),"\nhello girls", (error):void=>{
            if(error){
               console.log("an error occured whilr creating file", error)
            }else{
               console.log("file appended successfully")
            }
           })

fs.readFile(path.join(__dirname, "Class", "Class.txt"),"utf-8" , (error, data)=>{

    if(error){
        console.log(error)
    }else{
        console.log(data)
    }

})
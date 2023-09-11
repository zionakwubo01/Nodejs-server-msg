// //for every one sec

// // setTimeout(()=>{
// //  let add = "skip add in the next 5 minutes"
// //  console.log(add)
// // },1000)


// // let y = 0
// // setInterval(()=>{
// //     console.log(`i have run ${y++} times`)
// // },5000)

// function cash(money){
   
// setInterval(()=>{
//     if(money<6000){
//        console.log(money+=17)
//     }
// },1000)
// } 
// // console.log(cash(5000))

// cash(5000)
// /**
//  * dirname
//  * basename\
//  * exname
//  */

// import  path from "path"

// console.log(path.basename("//foo/bar/baz/asdf/quux.html/n.html"))

// console.log(path.extname("//foo/bar/baz/asdf/quux.html/n.html"))

// console.log(path.dirname("//foo/bar/baz/asdf/quux.html/n.html"))

//join
// console.log(path.join('/foo', 'bae', 'baz/asdf', 'quux','..'))

//normalixe
// console.log(path.normalize("foo///////bar/baz//asdf/quux.."))

//format
// console.log({
//     root: "/ignored",
//     dir: "/home/user/dir",
//     base: "file.txt",
// })

//isabsolute
// console.log(path.isAbsolute("/foo"))

// console.log(path.isAbsolute("foo/baz"))


//parse
// console.log(path.parse("/home/user/dir/file.html"))

// console.log(path.win32)

// console.log(path.resolve("/foo/bar", "/baz"))

// console.log(path.toNamespacedPath("/foo/baz"))


// console.log(path.posix)


// import path from "path"
// import fs from "fs"
// import { error } from "console"
// import path from "path"



// let  newmsg = "hello world"
// fs.mkdir("./NewClass", (error): void=>{
//     if(error){
// console.log("an error in creating folder" +error)
//     }else{
//         console.log(error, "created successfully")
//     }
// })



import fs from "fs"
import { error } from "console"
import path from "path"



fs.mkdir("./Class", (error):void =>{
        if(error){
    console.log("an error in creating folder" +error)
        }else{
            console.log(error, "created successfully")
        }
    })
    let message1: string = "hello world"

    fs.writeFile(path.join(__dirname, "Class", "Class.txt"),message1, (error):void=>{
     if(error){
        console.log("an error occured whilr creating file", error)
     }else{
        console.log("file created successfully")
     }
    })





    let randomtext = Math.floor(Math.random()*message1.length)
    setInterval(()=>{
        let message2: any = ["\ni am a boy", "\ni am a girl", "\njesus is good", "\ni will praise", "\ni am a true worshipper","\ni am blessed", "\ni am redeemed", "\ni am a winner", "\ni am a champion", "\nyou are a fool", "\ndont quit", "\nkeep pushing", "\ni laugh", "\ndrunk i the hs"]

        let randomtext = Math.floor(Math.random()*message2.length)
      
        let message3 = message2[randomtext]

        fs.appendFile(path.join(__dirname, "Class", "Class.txt"),message3, (error):void=>{
         if(error){ 
            console.log("an error occured whilr appending text", error)
         }else{
            console.log("file appended successfully")
         }
        })
    },3000)
 

//  let arr =["i am a boy", "i am a girl", "jesus is good", "i will praise", "i am a true worshipper","i am blessed", "i am redeemed", "i am a winner", "i am a champion"]
 
// const randtext = Math.floor(Math.random()* arr.length)

// console.log(arr[randtext ])  

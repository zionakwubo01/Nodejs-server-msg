import fs from "fs"


function readmyfile(){
    const readfile = fs.createReadStream('./streamfile.txt', 'utf-8');

    readfile.on("error", function error(){
        console.log('an error occured', error);
    });

    readfile.on('data', (text)=>{
        console.log('reading file', text)
    })
}                                       
readmyfile();
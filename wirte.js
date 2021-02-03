const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname,'./temp/abc.txt3')

const ws = fs.createWriteStream(filename,{
    encoding:'utf-8',
    highWaterMark: 3,
    flags:'a'
})

let i =0;
function write(){
    let flag =true;
    while(i<1024*1024*10 && flag){
        flag = ws.write('a')
        i++;
    }
}
write()

ws.on('drain',()=>{
    write();
})

// let a = ws.write('a')
// console.log(a)
// a = ws.write('a')
// console.log(a)
// a = ws.write('a')
// console.log(a)
// a = ws.write('a')
// console.log(a)
// a = ws.write('a')
// console.log(a)
// a = ws.write('a')
// console.log(a)
// a = ws.write('a')
// console.log(a)
// a = ws.write('a')
// console.log(a)



const fs = require("fs");
const path = require("path");
const dirname = path.resolve(__dirname, "./myfiles/d");
const xin = path.resolve(__dirname,'./myfiles/d/1.text')
async function test() {
    await fs.promises.writeFile(xin,'utf-8') 
    await fs.promises.mkdir(dirname)
    console.log(创建成功)
 }

 test()
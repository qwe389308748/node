const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname,'./myfiles/b.text')

async function test() {
    const buff = Buffer.from('1234','utf-8')
    await fs.promises.writeFile(filename,buff,{
        flag: "a"
    })
    console.log('写入成功')
 }

 test()
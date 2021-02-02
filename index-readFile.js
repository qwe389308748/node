const fs  = require('fs')
const path = require('path')

const filename = path.resolve(__dirname,'./myfiles/a.text')
// fs.readFile(filename,'UTF-8',(err,content)=>{
//     console.log(content)
// })

// const F = fs.readFileSync(filename,'UTF-8')
// console.log(F)

// async function test(){
//     const content = await fs.promises.readFile(filename,'utf-8')
//     console.log(content)
// }

// test()
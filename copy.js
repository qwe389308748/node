const fs = require("fs");
const path = require("path");

// 方式一
async function method1() { 
    const form = path.resolve(__dirname,'./abc.txt')
    const to = path.resolve(__dirname,'./abc2.txt')
    console.time('方式一')
    const conten = await fs.promises.readFile(form);
    await fs.promises.writeFile(to,conten)
    console.timeEnd('方式一')
    console.log('复制完成')
 }

 method1()


方式二

async function method2() {
    const form = path.resolve(__dirname,'./abc.txt')
    const to = path.resolve(__dirname,'./abc2.txt')
    console.time('方式二')
    const rs = fs.createReadStream(form);
    const ws = fs.createWriteStream(to);

    rs.on('open',()=>{
        console.log('文件开始读')
    })

    rs.on('data',chund =>{
        const flag = ws.write(chund)
        if(!flag){
            rs.pause();
        }
    })

    ws.on('drain',()=>{
        rs.resume();
    })
    rs.on("close", () => {
        //写完了
        ws.end(); //完毕写入流
        console.timeEnd("方式二");
        console.log("复制完成");
      });
}
method2()
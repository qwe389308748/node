const fs = require("fs");
const path = require("path");

async function  test(params) {
    const fromFilename = path.resolve(__dirname,'./myfiles/1.jpeg')
    const buff = await fs.promises.readFile(fromFilename)
    const toFilename = path.resolve(__dirname,'./myfiles/1copy.jpeg')
    await fs.promises.writeFile(toFilename,buff)
}

test()
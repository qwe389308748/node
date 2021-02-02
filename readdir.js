const fs = require("fs");
const path = require("path");
const filename = path.resolve(__dirname, "./myfiles/");
async function  test(params) {
    const pathrs = await fs.promises.readdir(filename)
    console.log(pathrs)
}

test()
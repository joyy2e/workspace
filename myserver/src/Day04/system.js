const os = require("os");
const path = require("path");

const System = {
    info: () => {
        console.log("os.version() ===> " + os.version())
        console.log("os.srch() ===> " + os.arch())
        console.log("os.freemem() ===> " + os.freemem())
        console.log("os.homedir() ===> " + os.homedir())
        console.log("os.hostname() ===> " + os.hostname())
        console.log("os.totalmem() ===> " + os.totalmem())
        console.log("os.uptime() ===> " + os.uptime())
        console.log("os.networkinterface() ===> " + os.networkInterfaces())

        // 문자열과 함께 출력하면 오브젝트를 인식하지 못할 수 있다.
        console.log(os.networkInterfaces())
    }, 
    path: () => {
        console.log("path.join() ===> " + path.join("C:/", "Users", "sentron", "test.txt"))
        console.log("path.dirname() ===> " + path.dirname("C:/programs/test.txt"))
        console.log("path.basename() ===> " + path.basename("C:/programs/test.txt"))
        console.log("path.extname() ===> " + path.extname("C:/programs/test.txt"))
    }
}

module.exports = System;
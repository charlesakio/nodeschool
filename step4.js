var fs = require('fs') // Load global module filesystem
var str = fs.readFile(process.argv[2])

console.log(str)
// console.log(str.match(/\n/g).length)

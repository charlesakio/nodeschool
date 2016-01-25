var fs = require('fs') // Load global module filesystem
var buffer = fs.readFileSync(process.argv[2])
var str = buffer.toString()

console.log(str.match(/\n/g).length)

// Write a program that accepts one or more numbers as command-line arguments
//  and prints the sum of those numbers to the console (stdout).

var result = 0
process.argv.forEach(function (element) {
  if (!isNaN(element)) {
    result += Number(element)
  }
})

console.log(result)

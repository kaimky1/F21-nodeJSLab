const add = require("./addTwoFunction");
const functions = require("./functions.js")

console.log(add(2))

console.log("This is the minus one", functions.minusOne(5))
console.log("This is the times three function", functions.timesThree(2))
console.log("This is the age function: ", functions.ageText(21))
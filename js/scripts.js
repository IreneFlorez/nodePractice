const library = require("./library.js");

var commandArgs = process.argv;
var otherArgs = [];

commandArgs.shift();
commandArgs.shift();

for (var i=0; i<commandArgs.length; i++){
    otherArgs.push(parseInt(commandArgs[i]));
}

console.log(otherArgs);
console.log("Mean:" + library.findMean(otherArgs));
console.log("Median:"+ library.findMedian(otherArgs));

library.print(library.getDate());
library.print(library.getDateIn120Seconds());

//var numbersArray = [10, 200, 200, 102, 203];
//var mean = library.findMean(numbersArray);

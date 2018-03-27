const library = require("./library.js");
library.print(library.getDate());
library.print(library.getDateIn120Seconds());

var numbersArray = [10, 200, 200, 102, 203];
var mean = library.findMean(numbersArray);
var length = numbersArray.length;
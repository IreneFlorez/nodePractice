//https://tutorialedge.net/javascript/nodejs/reading-writing-files-with-nodejs/
var fs = require('fs');

var important = "very important";

//reads database, saves current text, then adds new text and saves it
fs.readFile('database', function(err, buffer) {
  var tempText=buffer.toString();
  var data = tempText + "\n This is one a new line";


  fs.writeFile('database', data, function(err, data){
      if (err) console.log(err);
      console.log("Successfully Written to File.");
  });
});
//read text from database and stores it as a string into text variable
var text = fs.readFileSync('database').toString('utf8');
console.log(text);
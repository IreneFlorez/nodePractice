const library = require("./library.js");
var batchOfTickets = [];

for (var i=0; i<100; i++){
    batchOfTickets.push(library.ticket());
}
console.log(batchOfTickets);

var winningTicket = library.ticket();

    for (var i=0; i< batchOfTickets.length; i++) {
        var matchingNumbers = 0;
        
        for (var e = 0; e < batchOfTickets[i].length; e++) {
        
        if (batchOfTickets[i][e] == winningTicket[e]) {
            matchingNumbers++;
        }
        
    }
    
    if (matchingNumbers >= 5) {
        console.log("Current Ticket matches " + matchingNumbers + " Numbers to winning Numbers.");
        console.log(batchOfTickets[i]);
    }
    
    // Check typeof both arrays. Might different objects.
    if (batchOfTickets[i] == winningTicket) {
        console.log("Winning Ticket: " + batchOfTickets[i]);
    }
    }

console.log("The Winning numbers are: "+ winningTicket);
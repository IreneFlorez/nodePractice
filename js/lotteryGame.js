const library = require("./library.js");

var batchOfTickets = [];

for (var i=0; i<100; i++){
    batchOfTickets.push(library.ticket());
}

console.log(batchOfTickets);

var winningTicket = library.ticket();

    for (var i=0; i< batchOfTickets.length; i++) {
         if (batchOfTickets[i]===winningTicket){
             console.log("You have a winner. The Winning Ticket: "+ batchOfTickets[i]);
         }
    }

console.log("The Winning numbers are: "+ winningTicket);
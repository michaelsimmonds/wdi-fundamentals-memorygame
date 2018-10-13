console.log("Up and running!");

var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];

var cardOne = cards[1];
cardsInPlay.push(cardOne);
console.log("User flipped Queen!");

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped King!");

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You've found a match");
	} else {
		alert("Sorry, try again");
	}
}
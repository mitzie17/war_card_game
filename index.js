// Need classes for: Card, Player, Deck, and Game (game logic)
// Need methods and properties for each class
// No need for user input
// Deal 26 Cards to each Player(2 players) from a Deck of 52 cards
// Iterate through the turns where each Player plays a Card
// The Player who played the higher card is awarded a point
// Ties result in zero points for both Players
// After all cards have been played, display the score and declare the winner
// Write a Unit Test using Mocha or Chai for at least one of the functions you write

class Player {
    constructor(name) {
        this.name = name
        this.hand = [ ]
        this.score = [ ]
    }
}

class Card {
    constructor(suit, rank, value) {
        this.suit = suit
        this.rank = rank
        this.value = value
    }
}

class Deck {
    constructor() {
        this.deck = [ ]
        this.suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades']
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }

    createDeck() {

    }

    shuffle() {

    }
}

class Game {

}

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
    constructor(suit, value) {
        this.suit = suit
        //this.rank = rank
        this.value = value
    }
}

class Deck {
    constructor() {
        this.deck = [ ]

        const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades']
        //this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// create 52 cards, each with a suit(i) and value(j)
// push each card to the deck array
        for (let i = 0; i < suits.length; i++) {
            //console.log(i)
            for (let j = 0; j < values.length; j++) {
                //console.log(j + 2)
                this.deck.push(new Card(suits[i], values[j] + 1))
                
            }
        }
    }

    

    shuffleDeck() {

        for (let i = this.deck.length - 1; i > 0; i--) {
            // the randomIndex variable returns array 52 to 2
            let randomIndex = Math.floor(Math.random() * (i + 1))
            // the currentIndex variable returns an array(deck) of cards, each with an assigned suit and value
            let currentIndex = this.deck[i]
            // assigns each card an index between 2-52
            this.deck[i] = this.deck[randomIndex]
            this.deck[randomIndex] = currentIndex  
        }
        // returns deck of shuffled cards, each with a suit and a value
        return this.deck
    }

}

class Game {

}

let newDeck = new Deck()
console.log(newDeck.shuffleDeck())

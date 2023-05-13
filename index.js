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
        this.score = 0
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        //this.rank = rank?
        this.value = value
    }
}

class Deck {
    constructor() {
        this.deck = [ ]

        const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades']
        //card ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

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

    splitDeck(playerOne, playerTwo) {
        // "hands" the first half of shuffled deck to playerOne
        playerOne.hand = [...this.deck.slice(0, 26)]
        // "hands" the second half of shuffled deck to playerTwo
        playerTwo.hand = [...this.deck.slice(26, 52)]
    }

}

class Game {
    constructor() {
        this.players = [ ]
    }

    createPlayer(player) {
        let playerName = prompt(`Enter name of player ${player}: `)

        while (playerName == '' || playerName === null) {
            playerName = prompt(`Player must have a name.`)
        }
        this.players.push(new Player(playerName))
    }

    startGame() {
    // this function is called to start the game application
        this.createPlayer('one')
        this.createPlayer('two')
    // automatically start a new deck, shuffles the deck, and splits the shuffled deck between two players
        let newDeck = new Deck;
        newDeck.shuffleDeck();
        newDeck.splitDeck(this.players[0], this.players[1]);
    // here the play method is called to actually start the game
        this.play(this.players[0], this.players[1])
        
    }
    // defines logic of each play
    play(playerOne, playerTwo) {
        // iterates through each player's hand and saves each card in the variables playerOneCard and playerTwoCard, respectively
        for (let i = 0; i < this.players[0].hand.length; i++) {
            let playerOneCard = playerOne.hand[i]
            let playerTwocard = playerTwo.hand[i]
        // compares the value of each card to determine who wins each round and logs the score of both players
            if (playerOneCard.value > playerTwocard.value) {
                console.log(`${playerOne.name} wins!`);
                playerOne.score++
                console.log(`
                ${playerOne.name}'s Score: ${playerOne.score}
                ${playerTwo.name}'s Score: ${playerTwo.score}`)
            } else if (playerOneCard.value < playerTwocard.value) {
                console.log(`${playerTwo.name} wins!`);
                playerTwo.score++
                console.log(`
                ${playerOne.name}'s Score: ${playerOne.score}
                ${playerTwo.name}'s Score: ${playerTwo.score}`)
            } else if (playerOneCard.value === playerTwocard.value) {
                console.log("It's a tie! No point awarded.")
            }
        }
        // compares the overall score to determine the winner of the game
        if (playerOne.score > playerTwo.score) {
            console.log(`${playerOne.name} wins the game!
            ${playerOne.name}'s Final Score: ${playerOne.score}
            ${playerTwo.name}'s Final Score: ${playerTwo.score}`)
        } else if (playerOne.score < playerTwo.score) {
            console.log(`${playerTwo.name} wins the game!
            ${playerOne.name}'s Final Score: ${playerOne.score}
            ${playerTwo.name}'s Final Score: ${playerTwo.score}`)
        } else if (playerOne.score === playerTwo.score) {
            console.log(`No one wins the game!
            ${playerOne.name}'s Final Score: ${playerOne.score}
            ${playerTwo.name}'s Final Score: ${playerTwo.score}`)
        }
    }


}

//let newDeck = new Deck()
//let shuffled = newDeck.shuffleDeck()
//console.log(shuffled.slice(26, 52))

let startGame = new Game;
startGame.startGame()

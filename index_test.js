var expect = chai.expect;

describe('Card', () => {
    describe('#constructor', () => {
        it ('should take a suit and a value', (done) => {

            let card = new Card('diamonds', 5);
        
            expect(card.suit).to.equal('diamonds');
            expect(card.value).to.equal(5);
        
            done()
        })
    })
    
})

describe('Deck', () => {
    describe('#constructor', () => {
        it ('with empty constructor should create a deck with 52 cards', (done) => {
            let expectedCards = 52;
            let shuffledDeck = new Deck().shuffleDeck();

            expect(shuffledDeck).to.have.lengthOf(expectedCards);

            done();
        })
    })
})
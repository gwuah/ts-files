export enum Suit {
  Clubs, Diamond, Hears, Spades
}

export enum CardNumber {
  Ace, Two, Three, Four,
  Five, Six, Seven, Eight, Nine,
  Ten, Jack, Queen, KIng
}

type Card = [Suit, CardNumber];

let c:Card = [Suit.Clubs, CardNumber.Seven];

// function createDeck(): Card[] {
  
// }

export class Dealer {
  cards: Card[] = [];

  constructor() {
    // this.cards = createDeck()
  }

  // dealHands(numCards: number): Card[] {

  // }

  getLength(): number {
    return this.cards.length
  }

  readCard(card: Card): string {
    
  }


}
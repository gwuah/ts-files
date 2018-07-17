enum Suit {
  Club,
  Diamond,
  Heart,
  Spade
}

class ShoppingCart {
  items: number[] = []

  constructor() {

  }

  incr(data: number) {
    this.items.push(data)
  }
}
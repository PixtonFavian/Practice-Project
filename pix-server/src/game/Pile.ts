import { WagerCard, ValueCard } from "./Card";
import { Expeditions } from "./Expeditions";

const ShuffleMixin = {
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  },
};

const DrawMixin = {
  draw() {
    return this.cards.pop();
  },
};

const AddCardMixin = {
  add(card) {
    this.cards.push(card);
  },
};

class Pile {
  cards: WagerCard[] | ValueCard[];
  constructor() {
    this.cards = []
  }
  function getLength():number {
    return this.cards.length;
  };

}

// const DeckAbility = compose(DrawMixin, ShuffleMixin)(Pile);
class Deck extends Pile {
  constructor() {
    super();
    this.initDeck();
    this.shuffle();
  }
  initDeck() {
    for (let expedition in Expeditions) {
      //Add each value from 2-10 from each expedition
      for (let i = 2; i <= 10; i++) {
        const valueCard = new ValueCard(expedition, i);
        this.cards.push(valueCard);
      }
      //Add the 3 wager cards of each expedition  the deck
      for (let i = 0; i <= 3; i++) {
        const wagerCard = new WagerCard(expedition);
        this.cards.push(wagerCard);
      }
    }
  }
}
Object.assign(Deck.prototype, DrawMixin, ShuffleMixin);

// const DiscardAbility = compose(DrawMixin, AddCardMixin)(Pile);
class DiscardPile extends Pile {
  constructor(expedition) {
    super();
    this.expedition = expedition;
  }
}
Object.assign(DiscardPile.prototype, DrawMixin, AddCardMixin);

// const ExpeditionAbility = compose(AddCardMixin)(Pile);
class ExpeditionPile extends Pile {
  constructor(expedition) {
    super();
    this.expedition = expedition;
  }

  addToExpedition(card) {
    pileSize = this.cards.length;
    if (card.isWager && (pileSize === 0 || this.cards[pileSize - 1].isWager)) {
      this.add(card);
    } else if (card.value > this.cards[this.cards.length - 1]) {
      this.add(card);
    } else {
      console.log(
        "Card must be of higher value than previous card or a wager on a empty board"
      );
    }
  }
}
Object.assign(ExpeditionPile.prototype, AddCardMixin);

export { Deck, DiscardPile, ExpeditionPile };

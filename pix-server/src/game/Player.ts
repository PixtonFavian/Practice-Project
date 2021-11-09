import { ValueCard, WagerCard } from "./Card.js";
import { Expeditions } from "./Expeditions";
import { ExpeditionPile } from "./Pile.js";
type CardType = ValueCard | WagerCard;

export class Player {
  hand: CardType[];
  expeditionBoard: Map<Expeditions, ExpeditionPile>;
  points: number;
  playerOne: boolean;

  constructor(isPlayerOne) {
    this.hand = [];
    this.expeditionBoard = new Map();
    this.points = 0;
    this.playerOne = isPlayerOne ? isPlayerOne : false;
  }

  addToHand(card: CardType): void {
    this.hand.push(card);
  }

  chooseCard(cardNumber: number): CardType {
    const temp = this.hand[cardNumber];
    this.hand[cardNumber] = this.hand[this.hand.length - 1];
    this.hand[this.hand.length - 1] = temp;
    return this.hand.pop();
  }

  chosePlacement(card, pile) {}

  addToExpedition(card: CardType): void {
    const pileSize = this.expeditionBoard.get(card.expedition).getLength();
    if (card.isWager && (pileSize === 0 || pile[pileSize - 1].isWager)) {
      this.add(card);
    } else if (
      !card.isWager &&
      card.value > this.cards[this.cards.length - 1]
    ) {
      this.add(card);
    } else {
      console.log(
        "Card must be of higher value than previous card or a wager on a empty board"
      );
    }
  }
  placeCard(pile, card) {}
}

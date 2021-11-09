import { Deck, DiscardPile } from "./Pile";
import { Player } from "./Player";
import { Expeditions } from "./Expeditions";

const VALUES = 10;
const WAGER_AMOUNT = 3;

const Board = {
  TUNDRA: new DiscardPile(Expeditions.TUNDRA),
  DESERT: new DiscardPile(Expeditions.DESERT),
  GRASSLAND: new DiscardPile(Expeditions.GRASSLAND),
  OCEAN: new DiscardPile(Expeditions.OCEAN),
  VOLCANIC: new DiscardPile(Expeditions.VOLCANIC),
};

let deck = new Deck();
let player1 = new Player(true);
let player2 = new Player();
//deal cards
for (let i = 0; i < 10; i++) {
  let c = deck.draw();
  player1.addToHand(c);
  c = deck.draw();
  player2.addToHand(c);
}
console.log(player1.hand);

//Player 1 turn
//choose a card place it
let chosenCard = player1.chooseCard(0);
//make sure user picks card between 0-9
console.log(chosenCard);
//choose what do do with card
//if expedition, then check if it is possible, if it is discard, discard the card.
//confirm?

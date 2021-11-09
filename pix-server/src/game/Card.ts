import { Expeditions } from "./Expeditions";

class ValueCard {
  isWager: boolean;
  constructor(public expedition: Expeditions, public value: number) {
    this.isWager = false;
  }
}

class WagerCard {
  isWager: boolean;
  constructor(public expedition: Expeditions) {
    this.isWager = true;
  }
}
export { WagerCard, ValueCard };

import { Expeditions } from "../Expeditions";

export default interface CardInterface {
  value: number;
  expedition: Expeditions;
  isWager: boolean;
}

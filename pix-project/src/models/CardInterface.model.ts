import { Expeditions } from "./Expeditions.enum";

export default interface CardInterface {
  id: number;
  value: number;
  expedition: Expeditions;
  isWager: boolean;
  chosen: boolean;
}

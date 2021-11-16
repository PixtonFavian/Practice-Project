import { Expeditions } from "../models/Expeditions.enum";
import { orange, green, blue, blueGrey, red } from "@mui/material/colors";

const opacity = 400;
export const colorMap = {
  [Expeditions.DESERT]: orange[opacity],
  [Expeditions.GRASSLAND]: green[opacity],
  [Expeditions.OCEAN]: blue[opacity],
  [Expeditions.TUNDRA]: blueGrey[opacity],
  [Expeditions.VOLCANIC]: red[opacity],
};

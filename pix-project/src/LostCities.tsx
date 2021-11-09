import { Container } from "@mui/material";
import { blueGrey, orange, green, blue, red } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import { Expeditions } from "./Expeditions";
import Card from "./components/Card";
import CardInterface from "./interfaces/CardInterface";
import CardField from "./components/CardField";
import DiscardField from "./components/DiscardField";

const opacity = 400;
export const bgColorMap = {
  [Expeditions.DESERT]: orange[opacity],
  [Expeditions.GRASSLAND]: green[opacity],
  [Expeditions.OCEAN]: blue[opacity],
  [Expeditions.TUNDRA]: blueGrey[opacity],
  [Expeditions.VOLCANIC]: red[opacity],
};

const hand: CardInterface[] = [
  {
    value: 4,
    expedition: Expeditions.DESERT,
    isWager: false,
  },
  {
    value: 2,
    expedition: Expeditions.GRASSLAND,
    isWager: false,
  },
  {
    value: 7,
    expedition: Expeditions.OCEAN,
    isWager: false,
  },
  {
    value: 9,
    expedition: Expeditions.TUNDRA,
    isWager: false,
  },
  {
    value: 10,
    expedition: Expeditions.VOLCANIC,
    isWager: false,
  },
  {
    value: 2,
    expedition: Expeditions.OCEAN,
    isWager: false,
  },
  {
    value: 0,
    expedition: Expeditions.VOLCANIC,
    isWager: true,
  },
  { value: 0, expedition: Expeditions.OCEAN, isWager: true },
  { value: 0, expedition: Expeditions.OCEAN, isWager: true },
];
export default function LostCities() {
  //fetch cards from server
  //fetch expedition from server
  //fetch top card from server
  //fetch player from server
  //fetch player hand from server

  return (
    <>
      <Box
        sx={{
          bgcolor: blueGrey[900],
          borderRadius: "10px",
          overflow: "hidden",
          height: "80vh",
          maxWidth: "md",
          margin: "auto",
        }}
      >
        <Container
          sx={{
            p: 2,
            height: "80vh",
            maxWidth: "md",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              maxWidth: "sm",
              bgcolor: orange[100],
              p: 1,
              my: 0.5,
            }}
          >
            Opponent
          </Box>
          <DiscardField cardList={hand} />
          <CardField cardList={hand} />
        </Container>
      </Box>
    </>
  );
}

import { cardMediaClasses } from "@mui/material";
import { Box } from "@mui/system";
import { orange } from "@mui/material/colors";
import CardInterface from "../interfaces/CardInterface";
import Card from "./Card";
import { Expeditions } from "../Expeditions";

interface CardFieldProps {
  cardList: CardInterface[];
}
const field: CardInterface[] = [
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
];

export default function CardField(props: CardFieldProps) {
  const hand = props.cardList;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        maxWidth: "lg",
        minHeight: "120px",
        bgcolor: orange[100],
        flexGrow: 0,
        borderRadius: 1,
        p: 1,
        my: 0.5,
      }}
    >
      {field.map((card: CardInterface) => (
        <Card card={card} />
      ))}
    </Box>
  );
}

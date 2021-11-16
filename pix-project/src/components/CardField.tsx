import { Box } from "@mui/system";
import { blueGrey } from "@mui/material/colors";
import CardInterface from "../models/CardInterface.model";
import Card from "./Card";

interface CardFieldProps {
  handleCardPick: (id: Number) => void;
  cardList: CardInterface[];
}

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
        maxWidth: "md",
        minHeight: "120px",
        bgcolor: blueGrey[100],
        flexGrow: 0,
        borderRadius: 1,
        p: 1,
        my: 0.5,
      }}
    >
      {hand.map((card: CardInterface) => (
        <Card id={card.id} card={card} onClick={props.handleCardPick} />
      ))}
    </Box>
  );
}

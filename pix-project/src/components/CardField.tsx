import { cardMediaClasses } from "@mui/material";
import { Box } from "@mui/system";
import { orange } from "@mui/material/colors";
import CardInterface from "../interfaces/CardInterface";
import Card from "./Card";

interface CardFieldProps {
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
        maxWidth: "lg",
        minHeight: "120px",
        bgcolor: orange[100],
        flexGrow: 0,
        borderRadius: 1,
        p: 1,
        my: 0.5,
      }}
    >
      {hand.map((card: CardInterface) => (
        <Card card={card} />
      ))}
    </Box>
  );
}

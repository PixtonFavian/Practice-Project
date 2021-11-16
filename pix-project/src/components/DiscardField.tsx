import { Box } from "@mui/system";
import { orange } from "@mui/material/colors";
import { Expeditions } from "../models/Expeditions.enum";
import { colorMap } from "../utils/colorMap";
import { ExpeditionMapType } from "../models/ExpeditionMapType.model";
import Card from "./Card";

interface CardFieldProps {
  cardMap: ExpeditionMapType;
}

function CardHolder(props: { expedition: Expeditions }) {
  return (
    <Box
      sx={{
        minWidth: 70,
        bgcolor: colorMap[props.expedition],
        px: 0.5,
        py: 0.5,
        m: 0.25,
        borderRadius: 1,
        textAlign: "center",
        color: "white",
        alignSelf: "stretch",
      }}
    ></Box>
  );
}

export default function DiscardField(props: CardFieldProps) {
  const expeditions = [
    Expeditions.DESERT,
    Expeditions.GRASSLAND,
    Expeditions.TUNDRA,
    Expeditions.OCEAN,
    Expeditions.VOLCANIC,
  ];

  const discardCards: any[] = new Array(expeditions.length).fill(null);

  for (const e of expeditions) {
    if (props.cardMap[e].length !== 0) {
      const card = props.cardMap[e].at(-1);
      if (card !== undefined) {
        discardCards[e] = (
          <Card
            id={card.id}
            card={card}
            onClick={() => console.log("discardPicked")}
          />
        );
      }
    } else {
      discardCards[e] = <CardHolder expedition={e} />;
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        maxWidth: "lg",
        minHeight: 100,
        bgcolor: orange[100],
        flexGrow: 0,
        borderRadius: 1,
        p: 1,
        my: 0.5,
      }}
    >
      {discardCards}
    </Box>
  );
}

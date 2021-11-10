import { cardMediaClasses } from "@mui/material";
import { Box } from "@mui/system";
import { orange } from "@mui/material/colors";
import CardInterface from "../interfaces/CardInterface";
import Card from "./Card";
import { Expeditions } from "../Expeditions";
import { colorMap } from "../utils/colorMap";
import { useEffect } from "react";

interface CardFieldProps {
  cardList: CardInterface[];
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
  const hand = props.cardList;

  const expeditions = [
    Expeditions.DESERT,
    Expeditions.GRASSLAND,
    Expeditions.TUNDRA,
    Expeditions.OCEAN,
    Expeditions.VOLCANIC,
  ];
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
      {expeditions.map((expedition) => (
        <CardHolder expedition={expedition} />
      ))}
    </Box>
  );
}

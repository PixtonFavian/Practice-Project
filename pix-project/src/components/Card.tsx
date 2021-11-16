import { Box } from "@mui/system";
import { Expeditions } from "../models/Expeditions.enum";
import useHover from "../hooks/useHover";
import CardInterface from "../models/CardInterface.model";
import { colorMap } from "../utils/colorMap";
import { blueGrey } from "@mui/material/colors";
import { CardActionArea } from "@mui/material";
interface CardProps {
  id: number;
  onClick: (id: Number) => void;
  card: CardInterface;
}
export default function Card(props: CardProps) {
  const { hovered, ref } = useHover<HTMLDivElement>();
  const expedition = Expeditions[props.card.expedition].toLowerCase();
  function checkShadow() {
    if (hovered && !props.card.chosen) {
      return "1px 2px 5px rgba(0,0,0,0.5)";
    }
    return "none";
  }
  return (
    <div onClick={props.onClick.bind(null, props.id)} ref={ref}>
      <CardActionArea>
        <Box
          sx={{
            borderColor: blueGrey[700],
            border: props.card.chosen
              ? "7px solid #FFD200"
              : "2px solid #5376b0",
            minWidth: 70,
            bgcolor: colorMap[props.card.expedition],
            px: 0.5,
            py: 0.5,
            m: 0.25,
            borderRadius: 1,
            textAlign: "center",
            color: "white",
            alignSelf: "stretch",
            boxShadow: checkShadow(),
          }}
        >
          {props.card.isWager ? <h3>{"W"}</h3> : <h3>{props.card.value}</h3>}
          <p>{expedition}</p>
        </Box>
      </CardActionArea>
    </div>
  );
}

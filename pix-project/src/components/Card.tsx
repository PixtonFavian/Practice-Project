import { Box } from "@mui/system";
import { Expeditions } from "../Expeditions";
import useHover from "../hooks/useHover";
import { colorMap } from "../utils/colorMap";
interface CardProps {
  card: {
    value: number;
    expedition: Expeditions;
    isWager: boolean;
  };
}
export default function Card(props: CardProps) {
  const { hovered, ref } = useHover<HTMLDivElement>();
  const expedition = Expeditions[props.card.expedition].toLowerCase();
  return (
    <div ref={ref}>
      <Box
        sx={{
          border: hovered ? "5px solid #fff" : null,
          minWidth: 70,
          bgcolor: colorMap[props.card.expedition],
          px: 0.5,
          py: 0.5,
          m: 0.25,
          borderRadius: 1,
          textAlign: "center",
          color: "white",
          alignSelf: "stretch",
        }}
      >
        {props.card.isWager ? <h3>{"W"}</h3> : <h3>{props.card.value}</h3>}
        <p>{expedition}</p>
      </Box>
    </div>
  );
}

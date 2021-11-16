import React from "react";
import { Box, Typography } from "@mui/material";
import useHover from "../hooks/useHover";
import { green } from "@mui/material/colors";

interface DieProps {
  key: string;
  value: number;
  isHeld: boolean;
  holdDice: (id: string) => void;
}

export default function Die(props: DieProps) {
  const backgroundColor = props.isHeld ? green[400] : "white";
  const { hovered, ref } = useHover<HTMLDivElement>();

  return (
    <div onClick={props.holdDice.bind(null, props.key)} ref={ref}>
      <Box
        sx={{
          bgcolor: backgroundColor,
          height: 50,
          width: 50,
          p: 1,
          borderRadius: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:
            hovered || props.isHeld ? "1px 2px 5px rgba(0,0,0,0.8)" : "none",
        }}
      >
        <Typography variant="h3">{props.value}</Typography>
      </Box>
    </div>
  );
}

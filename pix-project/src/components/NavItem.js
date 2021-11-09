import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function Item({ selected, onClick, item }) {
  return (
    <Box
      sx={{
        py: 1,
        px: 4,
        bgcolor: selected ? blueGrey[500] : "transparent",
        color: selected ? "white" : blueGrey[900],
        cursor: "pointer",
        "&:hover": {
          bgcolor: !selected ? blueGrey[100] : blueGrey[500],
        },
      }}
      onClick={onClick}
    >
      <Typography variant="h9">{item.label}</Typography>
    </Box>
  );
}

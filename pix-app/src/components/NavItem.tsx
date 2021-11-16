import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

interface NavItemProps {
  key: string;
  label: string;
  onClick: () => void;
  selected: boolean;
}

export default function NavItem(props: NavItemProps) {
  return (
    <Box
      sx={{
        py: 1,
        px: 4,
        bgcolor: props.selected ? blueGrey[500] : "transparent",
        color: props.selected ? "white" : blueGrey[900],
        cursor: "pointer",
        "&:hover": {
          bgcolor: !props.selected ? blueGrey[100] : blueGrey[500],
        },
      }}
      onClick={props.onClick}
    >
      <Typography>{props.label}</Typography>
    </Box>
  );
}

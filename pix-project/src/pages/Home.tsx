import * as React from "react";
import { Box, TextField, Typography, Button } from "@mui/material/";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setUser } from "../features/nameSlice/nameSlice";
import { PlayerState } from "../models/PlayerState";
// import { useState } from "react";
export default function Home() {
  //textfield customization

  // const [form, setFormData] = useState<PlayerState>({
  //   user: {
  //     name: "",
  //     age: "",
  //     winSlogan: "",
  //     opponentName: "",
  //   },
  // });
  const userState = useAppSelector((state) => state.name.user);
  const dispatch = useAppDispatch();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const data: PlayerState = {
      user: { ...userState, [event.target.name]: event.target.value },
    };
    dispatch(setUser(data));
    // setFormData((prevFormData) => {
    //   return {
    //     ...prevFormData,
    //     [event.target.name]: event.target.value,
    //   };
    // });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Box
      sx={{
        bgcolor: "#2f586a",
        borderRadius: "25px",
        overflow: "hidden",
        maxWidth: "md",
        p: 5,
        boxShadow: "-17px 17px 41px #254553,17px -17px 41px #396b81",
      }}
    >
      <Box
        sx={{
          width: "100%",
          color: "#fff",
          "& > .MuiBox-root > .MuiBox-root": {
            p: 1,
            borderRadius: 1,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            gridTemplateRows: "auto",
            gridTemplateAreas: `"top-main top-main top-main top-main"
        "header header header header"
        "main main main sidebar"
        "footer footer footer footer"`,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              gridArea: "top-main",
              color: "primary.light",
              bgcolor: "info.dark",
              mb: 3,
              borderRadius: "5px",
              p: 3,
            }}
          >
            Player Info
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              name="name"
              value={userState.name}
              id="0"
              label="Player Name"
              variant="filled"
              sx={{ gridArea: "header" }}
            />
            <TextField
              onChange={handleChange}
              name="winSlogan"
              value={userState.winSlogan}
              id="1"
              variant="outlined"
              label="Winning Slogan"
              sx={{ gridArea: "main" }}
            />
            <TextField
              onChange={handleChange}
              name="age"
              value={userState.age}
              id="2"
              variant="outlined"
              label="Age"
              sx={{ gridArea: "sidebar" }}
            />
            <TextField
              onChange={handleChange}
              name="opponentName"
              value={userState.opponentName}
              id="3"
              variant="outlined"
              label="Opponent Name"
              sx={{ gridArea: "footer" }}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

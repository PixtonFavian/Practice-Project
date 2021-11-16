import { Stack, TextField, Typography, Button, Box } from "@mui/material/";
import { grey } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "../reduxStore/hooks";
import { setUser } from "../slices/user/userSlice";
import { User } from "../slices/user/user.model";

export default function UserPage() {
  const userState = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const data: User = {
      user: { ...userState, [event.target.name]: event.target.value },
    };
    dispatch(setUser(data));
  }

  function handleSubmit() {
    const data: User = {
      user: { ...userState, created: true },
    };
    dispatch(setUser(data));
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: grey[200],
          borderRadius: 2,
          p: 10,
        }}
      >
        <Typography variant="h4">Sign Up</Typography>

        <Box sx={{ m: 3 }}>Sign up to play Tenzies and see some dogs.</Box>
        <Stack component="form" spacing={2} noValidate autoComplete="off">
          <TextField
            onChange={handleChange}
            name="name"
            value={userState.name}
            id="0"
            label="Player Name"
            variant="filled"
          />
          <TextField
            onChange={handleChange}
            name="winSlogan"
            value={userState.winSlogan}
            id="1"
            variant="outlined"
            label="Winning Slogan"
          />
          <TextField
            onChange={handleChange}
            name="age"
            value={Number(userState.age)}
            id="2"
            variant="outlined"
            label="Age"
          />

          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

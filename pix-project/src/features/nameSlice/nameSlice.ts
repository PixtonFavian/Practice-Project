import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerState } from "../../models/PlayerState";

const initialState: PlayerState = {
  user: {
    name: "",
    age: "",
    winSlogan: "",
    opponentName: "",
  },
};

const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<PlayerState>) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = nameSlice.actions;
export default nameSlice.reducer;

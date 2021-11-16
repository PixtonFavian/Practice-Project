import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./user.model";

const initialState: User = {
  user: {
    name: "",
    age: null,
    winSlogan: "",
    created: false,
  },
};

const nameSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = nameSlice.actions;
export default nameSlice.reducer;

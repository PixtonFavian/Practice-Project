//wrapper around the basic redux store function
//automatically adds the redux dev tools extension
//automatically adds the redux thunk middleware
//automatically adds the redux saga middleware
import userSliceReducer from "../slices/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../slices/dogs/dogsApiSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import counterReducer from "../features/counter/counterSlice";
import nameSliceReducer from "../features/nameSlice/nameSlice";
import { configureStore } from "@reduxjs/toolkit";
//wrapper around the basic redux store function
//automatically adds the redux dev tools extension
//automatically adds the redux thunk middleware
//automatically adds the redux saga middleware
import { apiSlice } from "../features/dogs/dogsApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
//

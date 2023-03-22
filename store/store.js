const { configureStore } = require("@reduxjs/toolkit");
import { createWrapper } from "next-redux-wrapper";
import { authSlice } from "./slices/authSlice";
import { todoSlice } from "./slices/todoSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [todoSlice.name]: todoSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);

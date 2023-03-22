import React from "react";
import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      username: null,
      todo: null,
      status: null,
      due: null,
    },
  ],
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});
export const { addTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todos.value;
export default todoSlice.reducer;

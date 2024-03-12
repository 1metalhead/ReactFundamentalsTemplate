import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {
    setAuthors: (authors, payload) => payload.payload,
    saveAuthor: (authors, payload) => [...authors, payload.payload],
  },
});

// use these actions in your components / thunks
export const { setAuthors, saveAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;

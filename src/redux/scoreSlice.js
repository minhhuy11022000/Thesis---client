import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "scores",
  initialState: {
    score: 0,
  },
  reducers: {
    increaseScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { increaseScore } = scoreSlice.actions;

export default scoreSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
  name: "results",
  initialState: {
    listScoreByName: [],
    listScoreBySubject: {},
    pending: false,
    error: false,
  },
  reducers: {
    getScoreStart: (state) => {
      state.pending = true;
    },
    getScoreError: (state) => {
      state.pending = false;
      state.error = true;
    },
    getScoreBySubjectSuccess: (state, action) => {
      state.listScoreBySubject = action.payload;
      state.pending = false;
      state.error = false;
    },
  },
});

export const { getScoreStart, getScoreError, getScoreBySubjectSuccess } =
  resultsSlice.actions;

export default resultsSlice.reducer;

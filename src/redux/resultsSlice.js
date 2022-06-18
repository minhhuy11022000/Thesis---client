import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
  name: "results",
  initialState: {
    listScoreByName: [],
    listScoreBySubject: {},
    studentPersonalScore: {},
    pending: false,
    error: false,
  },
  reducers: {
    getScoreStart: (state) => {
      state.pending = true;
      state.error = false;
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
    getStudentPersonalScore: (state, action) => {
      state.studentPersonalScore = action.payload;
      state.pending = false;
      state.error = false;
    },
  },
});

export const {
  getScoreStart,
  getScoreError,
  getScoreBySubjectSuccess,
  getStudentPersonalScore,
} = resultsSlice.actions;

export default resultsSlice.reducer;

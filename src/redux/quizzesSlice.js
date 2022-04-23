import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    allQuizzes: [],
    pending: false,
    error: false,
    selectedQuiz: {},
  },
  reducers: {
    getAllQuizzesStart: (state) => {
      state.pending = true;
    },
    getAllQuizzesError: (state) => {
      state.error = true;
      state.pending = false;
    },
    getAllQuizzesSuccess: (state, action) => {
      state.allQuizzes = action.payload;
      state.pending = false;
      state.error = false;
    },
    getQuizStart: (state) => {
      state.pending = true;
    },
    getQuizError: (state) => {
      state.error = true;
      state.pending = false;
    },
    getQuizSuccess: (state, action) => {
      state.selectedQuiz = action.payload;
      state.pending = false;
      state.error = false;
    },
  },
});

export const {
  getAllQuizzesStart,
  getAllQuizzesError,
  getAllQuizzesSuccess,
  getQuizStart,
  getQuizSuccess,
  getQuizError,
} = quizzesSlice.actions;

export default quizzesSlice.reducer;

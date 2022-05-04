import { createSlice } from "@reduxjs/toolkit";

export const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questionsList: [],
    pending: false,
    error: false,
  },
  reducers: {
    getAllQuestionsStart: (state) => {
      state.pending = true;
    },
    getAllQuestionsError: (state) => {
      state.error = true;
      state.pending = false;
    },
    getAllQuestionsSuccess: (state, action) => {
      state.questionsList = action.payload;
      state.pending = false;
      state.error = false;
    },
    createNewQuestion: (state, action) => {
      state.questionsList = [...state.questionsList, action.payload];
    },
  },
});

export const {
  getAllQuestionsStart,
  getAllQuestionsSuccess,
  getAllQuestionsError,
  createNewQuestion,
} = questionsSlice.actions;

export default questionsSlice.reducer;

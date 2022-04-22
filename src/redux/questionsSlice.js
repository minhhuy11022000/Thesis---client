import { createSlice } from "@reduxjs/toolkit";

export const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
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
      state.questions = action.payload;
      state.pending = false;
      state.error = false;
    },
  },
});

export const {
  getAllQuestionsStart,
  getAllQuestionsSuccess,
  getAllQuestionsError,
} = questionsSlice.actions;

export default questionsSlice.reducer;

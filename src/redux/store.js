import { configureStore } from "@reduxjs/toolkit";
import joinedClassesSlice from "./joinedClassesSlice";
import questionsSlice from "./questionsSlice";
import quizzesSlice from "./quizzesSlice";
import scoreSlice from "./scoreSlice";

export default configureStore({
  reducer: {
    joinedClasses: joinedClassesSlice,
    questions: questionsSlice,
    quizzes: quizzesSlice,
    scores: scoreSlice,
  },
});

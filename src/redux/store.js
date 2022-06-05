import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import joinedClassesSlice from "./joinedClassesSlice";
import questionsSlice from "./questionsSlice";
import quizzesSlice from "./quizzesSlice";
import resultsSlice from "./resultsSlice";
import scoreSlice from "./scoreSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  joinedClasses: joinedClassesSlice,
  questions: questionsSlice,
  quizzes: quizzesSlice,
  results: resultsSlice,
  scores: scoreSlice,
  auth: authSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

// export default configureStore({
//   reducer: {
//     joinedClasses: joinedClassesSlice,
//     questions: questionsSlice,
//     quizzes: quizzesSlice,
//     results: resultsSlice,
//     scores: scoreSlice,
//     auth: authSlice,
//   },
// });

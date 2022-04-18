import { configureStore } from "@reduxjs/toolkit";
import joinedClassesSlice from "./joinedClassesSlice";

export default configureStore({
  reducer: {
    joinedClasses: joinedClassesSlice,
  },
});

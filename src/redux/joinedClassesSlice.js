import { createSlice } from "@reduxjs/toolkit";

export const joinedClassesSlice = createSlice({
  name: "joinedClasses",
  initialState: {
    allClasses: {
      classes: [],
      pending: false,
      error: false,
    },
  },
  reducers: {
    getJoinedClassesStart: (state) => {
      state.allClasses.pending = true;
    },
    getJoinedClassesError: (state) => {
      state.allClasses.pending = false;
      state.allClasses.error = true;
    },
    getJoinedClassesSuccess: (state, action) => {
      state.allClasses.classes = action.payload;
      state.allClasses.pending = true;
    },
  },
});

export const {
  getJoinedClassesError,
  getJoinedClassesStart,
  getJoinedClassesSuccess,
} = joinedClassesSlice.actions;
export default joinedClassesSlice.reducer;

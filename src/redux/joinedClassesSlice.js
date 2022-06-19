import { createSlice } from "@reduxjs/toolkit";

export const joinedClassesSlice = createSlice({
  name: "joinedClasses",
  initialState: {
    allClasses: {
      classes: [],
      studentClasses: [],
      pending: false,
      error: false,
      selectedClass: {},
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
      state.allClasses.pending = false;
      state.allClasses.error = false;
    },
    getJoinedClassStart: (state) => {
      state.allClasses.pending = true;
    },
    getJoinedClassError: (state) => {
      state.allClasses.error = true;
      state.allClasses.pending = false;
    },
    getJoinedClassSuccess: (state, action) => {
      state.allClasses.selectedClass = action.payload;
      state.allClasses.error = false;
      state.allClasses.pending = false;
    },
    getStudentClassesSuccess: (state, action) => {
      state.allClasses.studentClasses = action.payload;
      state.allClasses.pending = false;
      state.allClasses.error = false;
    },
  },
});

export const {
  getJoinedClassesError,
  getJoinedClassesStart,
  getJoinedClassesSuccess,
  getStudentClassesSuccess,
  getJoinedClassStart,
  getJoinedClassError,
  getJoinedClassSuccess,
} = joinedClassesSlice.actions;
export default joinedClassesSlice.reducer;

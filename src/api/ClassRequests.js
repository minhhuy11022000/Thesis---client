import axios from "axios";
import {
  getJoinedClassesStart,
  getJoinedClassesSuccess,
  getJoinedClassesError,
  getJoinedClassSuccess,
  getJoinedClassStart,
  getJoinedClassError,
  getStudentClassesSuccess,
} from "../redux/joinedClassesSlice";

export const getClasses = async (lecturerId, dispatch) => {
  dispatch(getJoinedClassesStart());
  try {
    const res = await axios.get(`/classes/lecturer/${lecturerId}`);
    dispatch(getJoinedClassesSuccess(res.data));
  } catch (err) {
    dispatch(getJoinedClassesError());
  }
};

export const getClass = async (id, dispatch) => {
  dispatch(getJoinedClassStart());
  try {
    const url = `/classes/` + id;
    const res = await axios.get(url);
    dispatch(getJoinedClassSuccess(res.data));
  } catch (err) {
    dispatch(getJoinedClassError());
  }
};

export const getClassStudentRole = async (studentId, dispatch) => {
  dispatch(getJoinedClassStart());
  try {
    const url = `/classes/student/` + studentId;
    const res = await axios.get(url);
    dispatch(getStudentClassesSuccess(res.data));
  } catch (err) {
    dispatch(getJoinedClassError());
  }
};

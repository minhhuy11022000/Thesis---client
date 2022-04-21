import axios from "axios";
import {
  getJoinedClassesStart,
  getJoinedClassesSuccess,
  getJoinedClassesError,
  getJoinedClassSuccess,
  getJoinedClassStart,
  getJoinedClassError,
} from "./joinedClassesSlice";

export const getClasses = async (dispatch) => {
  dispatch(getJoinedClassesStart());
  try {
    const res = await axios.get(`/classes`);
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
    console.log(res.data);
  } catch (err) {
    dispatch(getJoinedClassError());
  }
};

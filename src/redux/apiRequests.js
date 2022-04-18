import axios from "axios";
import {
  getJoinedClassesStart,
  getJoinedClassesSuccess,
  getJoinedClassesError,
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

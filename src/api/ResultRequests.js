import axios from "axios";
import {
  getScoreBySubjectSuccess,
  getScoreError,
  getScoreStart,
} from "../redux/resultsSlice";

export const submitStudentResult = async (studentInfo) => {
  try {
    const res = await axios.post(`/results`, studentInfo);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const getListScoreOfStudentBySubject = async (subject, dispatch) => {
  dispatch(getScoreStart());
  try {
    const res = await axios.get(`/results/class/${subject}`);
    dispatch(getScoreBySubjectSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(getScoreError());
  }
};

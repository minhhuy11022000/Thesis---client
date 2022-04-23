import axios from "axios";
import {
  getAllQuizzesSuccess,
  getAllQuizzesError,
  getAllQuizzesStart,
  getQuizError,
  getQuizStart,
  getQuizSuccess,
} from "../redux/quizzesSlice";

export const getAllQuizzes = async (dispatch) => {
  dispatch(getAllQuizzesStart());
  try {
    const res = await axios.get(`/quizzes`);
    dispatch(getAllQuizzesSuccess(res.data));
  } catch (err) {
    dispatch(getAllQuizzesError());
  }
};

export const getQuiz = async (id, dispatch) => {
  dispatch(getQuizStart());
  try {
    const url = `/quizzes/` + id;
    const res = await axios.get(url);
    dispatch(getQuizSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(getQuizError());
  }
};

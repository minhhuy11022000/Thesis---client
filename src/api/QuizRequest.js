import axios from "axios";
import {
  getAllQuizzesSuccess,
  getAllQuizzesError,
  getAllQuizzesStart,
  getQuizError,
  getQuizStart,
  getQuizSuccess,
} from "../redux/quizzesSlice";

export const getAllQuizzes = async (id, dispatch) => {
  dispatch(getAllQuizzesStart());
  try {
    const res = await axios.get(`/quizzes/class/${id}`);
    dispatch(getAllQuizzesSuccess(res.data));
  } catch (err) {
    dispatch(getAllQuizzesError());
  }
};

export const getQuiz = async (id, dispatch) => {
  dispatch(getQuizStart());
  try {
    const res = await axios.get(`/quizzes/${id}`);
    dispatch(getQuizSuccess(res.data));
  } catch (err) {
    dispatch(getQuizError());
  }
};

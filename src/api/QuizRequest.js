import axios from "axios";
import {
  getAllQuizzesSuccess,
  getAllQuizzesError,
  getAllQuizzesStart,
  getQuizError,
  getQuizStart,
  getQuizSuccess,
  createNewQuiz,
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

export const getQuiz = async (id, subject, dispatch) => {
  dispatch(getQuizStart());
  try {
    const res = await axios.post(`/quizzes/${id}`, { subject });
    dispatch(getQuizSuccess(res.data));
  } catch (err) {
    dispatch(getQuizError());
  }
};

export const createQuiz = async (quizInfo, dispatch) => {
  try {
    const res = await axios.post(`/quizzes`, quizInfo);
    dispatch(createNewQuiz(res.data));
  } catch (err) {
    console.log({ error: err });
  }
};

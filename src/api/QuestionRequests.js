import axios from "axios";
import {
  createNewQuestion,
  getAllQuestionsStart,
  getAllQuestionsSuccess,
  getAllQuestionsError,
} from "../redux/questionsSlice";

export const addNewQuestion = async (question, dispatch) => {
  try {
    const res = await axios.post("/questions", question);
    // console.log(res.data);
    dispatch(createNewQuestion(res.data));
  } catch (err) {
    console.log({ error: err });
  }
};

export const getAllQuestions = async (subject, dispatch) => {
  dispatch(getAllQuestionsStart());
  try {
    const res = await axios.get(`/questions/${subject}`);
    console.log(res.data);
    dispatch(getAllQuestionsSuccess(res.data));
  } catch (err) {
    dispatch(getAllQuestionsError());
  }
};

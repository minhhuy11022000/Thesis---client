import axios from "axios";
import { createNewQuestion } from "../redux/questionsSlice";

export const addNewQuestion = async (question, dispatch) => {
  try {
    const res = await axios.post("/questions", question);
    dispatch(createNewQuestion(res.data));
  } catch (err) {
    console.log({ error: err });
  }
};

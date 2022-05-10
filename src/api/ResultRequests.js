import axios from "axios";

export const submitStudentResult = async (studentInfo) => {
  try {
    const res = await axios.post(`/results`, studentInfo);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

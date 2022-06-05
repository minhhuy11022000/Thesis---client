import { Box, Button, Container, Typography, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getQuiz } from "../../api/QuizRequest";
import { submitStudentResult } from "../../api/ResultRequests";
import questions from "../../data/Questions";
import { increaseScore } from "../../redux/scoreSlice";

const QuizPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getQuiz(id, dispatch);
    }, [id, dispatch]);


    const quizPending = useSelector(state => state.quizzes.pending);
    const quizData = useSelector(state => state.quizzes.selectedQuiz);
    const scoreData = useSelector(state => state.scores.score);
    const classData = useSelector(state => state.joinedClasses.allClasses?.selectedClass);
    const user = useSelector(state => state.auth.login?.currentUser);

    console.log(scoreData);

    const [questionIndex, setQuestionIndex] = useState(0);

    const handleClickAnswer = (e) => {
        const question = quizData.questions[questionIndex];
        console.log(scoreData);
        if (e.target.textContent === question.correct_answer) {
            dispatch(increaseScore(scoreData + 1));
        }
        if (questionIndex + 1 < quizData.questions.length) {
            setQuestionIndex(questionIndex + 1);
        }
        else {
            navigate(`result`);
            submitStudentResult({
                class_name: classData.class_name,
                student_id: user?.uni_id,
                subject: classData.subject,
                quiz_name: quizData.quiz_name,
                grade: scoreData * 20
            })
        }
    }

    if (quizPending) {
        return (
            <Box textAlign='center' >
                <CircularProgress color='inherit' />
            </Box >
        )
    }

    return (
        <Container maxWidth="sm">
            <Box textAlign='center' mt={5}>
                <Typography variant="h3">{quizData.quiz_name}</Typography >
                <Typography variant="h4">Question {questionIndex + 1}</Typography>
                <Typography mt={5}>{quizData.questions?.[questionIndex].question_text}</Typography>
                {quizData.questions?.[questionIndex].question_possibilities.map(item => {
                    return (
                        <Box key={item._id} mt={2}>
                            <Button onClick={handleClickAnswer} variant="contained">{item.answer}</Button>
                        </Box>
                    )
                })}
            </Box>
        </Container >
    );
}

export default QuizPage;
import { Box, Button, Container, Typography, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuiz } from "../../api/QuizRequest";
import questions from "../../data/Questions";

const QuizPage = () => {
    const { id } = useParams();
    const [options, setOptions] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getQuiz(id, dispatch);
    }, [id, dispatch]);


    const quizPending = useSelector(state => state.quizzes.pending);
    const quizData = useSelector(state => state.quizzes.selectedQuiz);
    // console.log(quizData);
    console.log((quizData.questions));

    const [questionIndex, setQuestionIndex] = useState(0);
    // console.log(quizData.questions[questionIndex]);

    const handleClickAnswer = () => {
        if (questionIndex + 1 < quizData.questions.length) {
            setQuestionIndex(questionIndex + 1);
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
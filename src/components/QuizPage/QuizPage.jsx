import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import questions from "../../data/Questions";

const QuizPage = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);

    const handleClickAnswer = () => {
        if (questionIndex + 1 < questions.length) {
            setQuestionIndex(questionIndex + 1);
        }
    }

    return (
        <Container maxWidth="sm">
            <Box textAlign='center' mt={5}>
                <Typography variant="h4">Question {questions[questionIndex].id}</Typography>
                <Typography mt={5}>{questions[questionIndex].question_text}</Typography>
                {questions[questionIndex].question_possibilities.map(item => {
                    return (
                        <Box mt={2}>
                            <Button onClick={handleClickAnswer} variant="contained">{item.answer}</Button>
                        </Box>
                    )
                })}
            </Box>
        </Container>
    );
}

export default QuizPage;
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { useState } from 'react';
import './QuestionModal.scss';
import { useDispatch } from 'react-redux';
import { createNewQuestion } from '../../redux/questionsSlice';
import { addNewQuestion } from '../../api/QuestionRequests';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    'overflow-y': 'scroll'
};

const QuestionModal = ({ isModalOpen, setIsModalOpen }) => {
    const difficultyLevel = ['Easy', 'Medium', 'Hard'];

    const dispatch = useDispatch();

    const [diffLevel, setDiffLevel] = useState('Easy');
    const [questionType, setQuestionType] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [questionPoss1, setQuestionPoss1] = useState('');
    const [questionPoss2, setQuestionPoss2] = useState('');
    const [questionPoss3, setQuestionPoss3] = useState('');
    const [questionPoss4, setQuestionPoss4] = useState('');
    const [questionAnswer, setQuestionAnswer] = useState('');

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleDifficultyLevel = (event) => {
        setDiffLevel(event.target.value);
    };

    const handleQuestionType = (e) => {
        setQuestionType(e.target.value);
    }
    const handleQuestionText = (e) => {
        setQuestionText(e.target.value);
    }
    const handleQuestionPoss1 = (e) => {
        setQuestionPoss1(e.target.value);
    }
    const handleQuestionPoss2 = (e) => {
        setQuestionPoss2(e.target.value);
    }
    const handleQuestionPoss3 = (e) => {
        setQuestionPoss3(e.target.value);
    }
    const handleQuestionPoss4 = (e) => {
        setQuestionPoss4(e.target.value);
    }
    const handleQuestionAnswer = (e) => {
        setQuestionAnswer(e.target.value);
    }

    const handleAddNewQuestion = () => {
        const tempPoss = [questionPoss1,
            questionPoss2,
            questionPoss3,
            questionPoss4];

        const solvedTempPoss = tempPoss.map(poss => ({ answer: poss }));

        const newQuestion = {
            question_type: questionType,
            question_text: questionText,
            difficulty_level: diffLevel,
            question_possibilities: solvedTempPoss,
            correct_answer: questionAnswer
        }
        addNewQuestion(newQuestion, dispatch);
        setIsModalOpen(false);
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isModalOpen}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isModalOpen}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Adding New Question
                    </Typography>
                    <form className='add_question_form' autoComplete="off">
                        <TextField
                            className='form_element'
                            required
                            label="Question Type"
                            value={questionType}
                            onChange={handleQuestionType}
                        />
                        <TextField
                            className='form_element'
                            required
                            label="Question Text"
                            value={questionText}
                            onChange={handleQuestionText}
                        />
                        <FormControl
                            sx={{ minWidth: 120 }}
                            className='form_element'
                        >
                            <InputLabel id="demo-simple-select-helper-label">Difficulty Level</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={diffLevel}
                                label="DifficultyLevel"
                                onChange={handleDifficultyLevel}
                            >
                                {difficultyLevel.map(level => {
                                    return (
                                        <MenuItem key={level} value={level}>{level}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <TextField
                            className='form_element'
                            required
                            label="Question Possibility 1"
                            value={questionPoss1}
                            onChange={handleQuestionPoss1}
                        />
                        <TextField
                            className='form_element'
                            required
                            label="Question Possibility 2"
                            value={questionPoss2}
                            onChange={handleQuestionPoss2}
                        />
                        <TextField
                            className='form_element'
                            required
                            label="Question Possibility 3"
                            value={questionPoss3}
                            onChange={handleQuestionPoss3}
                        />
                        <TextField
                            className='form_element'
                            required
                            label="Question Possibility 4"
                            value={questionPoss4}
                            onChange={handleQuestionPoss4}
                        />
                        <TextField
                            className='form_element'
                            required
                            label="Correct Answer"
                            value={questionAnswer}
                            onChange={handleQuestionAnswer}
                        />
                        <Button
                            className='form_element'
                            variant='contained'
                            onClick={handleAddNewQuestion}
                        >
                            Add
                        </Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
        // <div>This is a Modal</div>
    );
}

export default QuestionModal;
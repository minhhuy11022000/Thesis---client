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
import { useDispatch, useSelector } from 'react-redux';
import { addNewQuestion } from '../../api/QuestionRequests';
import './QuizModal.scss';
import { createQuiz } from '../../api/QuizRequest';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    // height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    'overflow-y': 'scroll'
};

const QuizModal = ({ openQuizModal, setOpenQuizModal }) => {
    const [quizName, setQuizName] = useState('');
    const dispatch = useDispatch();
    const classData = useSelector(state => state.joinedClasses.allClasses.selectedClass);
    console.log(classData)

    const handleCloseModal = () => {
        setOpenQuizModal(false);
    }

    const handleSubmitQuiz = () => {
        const quizInfo = {
            quiz_name: quizName,
            class_code: classData._id,
            subject: classData.subject,
        }
        console.log(quizInfo)
        createQuiz(quizInfo, dispatch);
        setOpenQuizModal(false);
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openQuizModal}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openQuizModal}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Adding New Quiz
                    </Typography>
                    <form className='add_quiz_form' autoComplete='off'>
                        <TextField
                            className='form_element'
                            required
                            label="Quiz name"
                            value={quizName}
                            onChange={(e) => setQuizName(e.target.value)}
                        />
                        <TextField
                            className='form_element'
                            required
                            label='Number of Questions'
                        />
                        <Button
                            className='form_element'
                            variant='contained'
                            onClick={handleSubmitQuiz}
                        >
                            Create
                        </Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
}

export default QuizModal;
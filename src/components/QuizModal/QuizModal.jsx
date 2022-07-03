import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    const [chapter, setChapter] = useState('');
    const [totalNum, setTotalNum] = useState(0);
    const [numEasyQues, setNumEasyQues] = useState(0);
    const [numMediumQues, setNumMediumQues] = useState(0);
    const [numHardQues, setNumHardQues] = useState(0);
    // const [errorNum, setErrorNum] = useState(false);

    const dispatch = useDispatch();
    const classData = useSelector(state => state.joinedClasses.allClasses.selectedClass);
    console.log(classData)

    const handleCloseModal = () => {
        setOpenQuizModal(false);
    }

    const handleCheckErrorOfTotal = () => {
        const checkNumber = parseInt(numEasyQues) + parseInt(numMediumQues) + parseInt(numHardQues) === parseInt(totalNum)
        return !checkNumber
    }

    const handleSubmitQuiz = () => {
        const quizInfo = {
            quiz_name: quizName,
            class_code: classData._id,
            subject: classData.subject,
            chapter: `Chapter ` + chapter,
            easy_number: parseInt(numEasyQues),
            medium_number: parseInt(numMediumQues),
            hard_number: parseInt(numHardQues)
        }
        console.log(quizInfo);
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
                            label="Chapter"
                            value={chapter}
                            onChange={(e) => setChapter(e.target.value)}
                        />
                        <TextField
                            className='form_element'
                            required
                            label='Number of Questions'
                            value={totalNum}
                            onChange={(e) => setTotalNum(e.target.value)}
                        />
                        <TextField
                            className='form_element'
                            required
                            label='Number of Easy'
                            value={numEasyQues}
                            inputProps={{ 'type': 'number' }}
                            onChange={(e) => setNumEasyQues(e.target.value)}
                        />
                        <TextField
                            className='form_element'
                            required
                            label='Number of Medium'
                            value={numMediumQues}
                            inputProps={{ 'type': 'number' }}
                            onChange={(e) => setNumMediumQues(e.target.value)}
                        />
                        <TextField
                            className='form_element'
                            required
                            label='Number of Hard'
                            value={numHardQues}
                            inputProps={{ 'type': 'number' }}
                            onChange={(e) => setNumHardQues(e.target.value)}
                        />
                        <Button
                            className='form_element'
                            variant='contained'
                            onClick={handleSubmitQuiz}
                            disabled={handleCheckErrorOfTotal()}
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
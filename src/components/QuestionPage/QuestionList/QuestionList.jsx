import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllQuestions } from '../../../api/QuestionRequests';
import { Divider, Typography, Box, CircularProgress } from '@mui/material';
import './QuestionList.scss';

const QuestionList = ({ subject }) => {
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch()

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        getAllQuestions(subject, dispatch);
    }, [subject, dispatch]);

    const questions = useSelector(state => state.questions.questionsList);
    const pendingQuestion = useSelector(state => state.questions.pending);

    const handleColorDiffLev = (level) => {
        if (level === 'Easy') {
            return 'easy'
        } else if (level === 'Medium') {
            return 'medium'
        } else {
            return 'hard'
        }
    }

    if (pendingQuestion) {
        return (
            <Box textAlign='center' >
                <CircularProgress color='inherit' />
            </Box >
        )
    }
    questions.map(question => console.log(question.chapter));

    return (
        <List
            className="list__question"
            sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    List of Questions
                </ListSubheader>
            }
        >
            {questions?.map(subChapter => {
                return (
                    // <div key={question._id}>
                    //     <ListItemButton onClick={handleClick}>
                    //         <ListItemText className='list__question__text' primary={question.question_text} />
                    //         {open ? <ExpandLess /> : <ExpandMore />}
                    //     </ListItemButton>
                    //     <Collapse in={open} timeout="auto" unmountOnExit>
                    //         <Typography className={`list__question__diffLevel ${handleColorDiffLev(question.difficulty_level)}`}>{question.difficulty_level}</Typography>
                    //         <List component="div" disablePadding>
                    //             {question?.question_possibilities.map(item => {
                    //                 return (
                    //                     <ListItemButton key={item._id} sx={{ pl: 4 }}>
                    //                         <ListItemText primary={item?.answer} />
                    //                     </ListItemButton>
                    //                 )
                    //             })}
                    //             <ListItemButton>
                    //                 <Typography variant='caption'>Correct answer:</Typography>
                    //                 <ListItemText primary={question?.correct_answer} />
                    //             </ListItemButton>
                    //         </List>
                    //     </Collapse>
                    //     <Divider />
                    // </div>
                    // <div>{chapter}</div>
                    <div key={subChapter.chapter}>
                        <ListItemButton onClick={handleClick}>
                            {/* <ListItemText className='list__question__text' primary={subChapter.chapter} /> */}
                            <Typography className='list__question__text'>{subChapter.chapter}</Typography>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <div className='question__item'>

                            <Collapse in={open} timeout="auto" unmountOnExit>
                                {subChapter?.listOfQuestions.map(question => {
                                    return (
                                        <div >
                                            <Typography >{question.question_text}</Typography>
                                            <Typography className={`list__question__diffLevel ${handleColorDiffLev(question.difficulty_level)}`}>{question.difficulty_level}</Typography>
                                            <List component="div" disablePadding>
                                                {question?.question_possibilities.map(item => {
                                                    return (
                                                        <ListItemButton key={item._id} sx={{ pl: 4 }}>
                                                            <ListItemText primary={item?.answer} />
                                                        </ListItemButton>
                                                    )
                                                })}
                                                <ListItemButton>
                                                    <Typography variant='caption'>Correct answer: </Typography>
                                                    <ListItemText primary={question?.correct_answer} />
                                                </ListItemButton>
                                            </List>
                                            <Divider />
                                        </div>
                                    )
                                })}
                            </Collapse>
                        </div>
                    </div>
                )
            })}
        </List>
    );
}

export default QuestionList;
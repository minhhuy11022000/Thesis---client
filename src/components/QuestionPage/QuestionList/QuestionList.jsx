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
import { Divider, Typography } from '@mui/material';
import './QuestionList.scss';
// import questions from '../../../data/Questions';

const QuestionList = () => {
    const [open, setOpen] = useState(true);

    const dispatch = useDispatch();

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        getAllQuestions(dispatch);
    }, [dispatch]);

    const questions = useSelector(state => state.questions.questionsList);

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
            {questions.map(question => {
                return (
                    <div key={question._id}>
                        <ListItemButton onClick={handleClick}>
                            <ListItemText className='list__question__text' primary={question.question_text} />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Typography className='list__question__diffLevel'>{question.difficulty_level}</Typography>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {question.question_possibilities.map(item => {
                                    return (
                                        <ListItemButton key={item._id} sx={{ pl: 4 }}>
                                            <ListItemText primary={item.answer} />
                                        </ListItemButton>
                                    )
                                })}
                                <ListItemButton>
                                    <Typography variant='caption'>Correct answer:</Typography>
                                    <ListItemText primary={question.correct_answer} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Divider />
                    </div>
                )
            })}
        </List>
    );
}

export default QuestionList;
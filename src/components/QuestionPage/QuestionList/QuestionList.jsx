import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const QuestionList = () => {
    const questions = [
        {
            id: 1,
            question_type: "text",
            question_text: "How much can a loggerhead weigh?",
            question_code: "WAD",
            question_possibilities: [
                {
                    text: "20",
                    isCorrect: false
                },
                {
                    text: "22",
                    isCorrect: false
                },
                {
                    text: "24",
                    isCorrect: true
                },
                {
                    text: "26",
                    isCorrect: false
                }
            ]
        },
        {
            id: 2,
            question_type: "text",
            question_text: "What is OOP?",
            question_code: "WAD",
            question_possibilities: [
                {
                    text: "Object-oriented Programming",
                    isCorrect: false
                },
                {
                    text: "Obtain-oritented Programming",
                    isCorrect: false
                },
                {
                    text: "Obstacle-oriented Programming",
                    isCorrect: true
                },
                {
                    text: "Onchange-oriented Programming",
                    isCorrect: false
                }
            ]
        }

    ]
    const [open, setOpen] = React.useState(true);
    // const [settings, setSettings] = React.useState([
    //     { id: 1, open: false }, { id: 2, open: false }
    // ]);

    const handleClick = () => {
        setOpen(!open);
    };

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
                    <div key={question.id}>
                        <ListItemButton onClick={handleClick}>
                            <ListItemText primary={question.question_text} />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {question.question_possibilities.map(item => {
                                    return (
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText primary={item.text} />
                                        </ListItemButton>
                                    )
                                })}
                            </List>
                        </Collapse>
                    </div>
                )
            })}
        </List>
    );
}

export default QuestionList;
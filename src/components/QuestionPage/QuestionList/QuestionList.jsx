import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import questions from '../../../data/Questions';

const QuestionList = () => {
    const [open, setOpen] = React.useState(true);
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
                                            <ListItemText primary={item.answer} />
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
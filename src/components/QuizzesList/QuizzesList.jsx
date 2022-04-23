import QuizIcon from '@mui/icons-material/Quiz';
import { Box, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './QuizzesList.scss';

const QuizzesList = ({ quizzesData }) => {

    const quizzesPending = useSelector(state => state.quizzes.pending);

    if (quizzesPending) {
        return (
            <Box textAlign='center' >
                <CircularProgress color='inherit' />
            </Box >
        )
    }

    return (
        <ul className="quizzes__container">
            {quizzesData.map(quiz => {
                return (
                    <li className="quiz__item" key={quiz._id}>
                        <Link className='quiz__link' to={`/quizzes/${quiz._id}`} >
                            <div className="quiz__icon">
                                <QuizIcon />
                            </div>
                            <div className="quiz__name">
                                {quiz.quiz_name}
                            </div>
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
}

export default QuizzesList;
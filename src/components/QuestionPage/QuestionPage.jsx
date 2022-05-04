import QuestionList from "./QuestionList/QuestionList";
import './QuestionPage.scss';
import { Link } from 'react-router-dom';
import SelectField from "../SelectField/SelectField";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import QuestionModal from "../QuestionModal/QuestionModal";
import Button from '@mui/material/Button';

const QuestionPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="question__page__container">
            <div className="question__page__left">
                <Link to="/classes" className="link__child">All Questions</Link>
                <div className="child__field"><SelectField /></div>
            </div>
            <div className="question__page__right">
                <div className="question__page__right__btn">
                    <Button
                        variant="contained"
                        children="Add new Question"
                        onClick={() => setIsModalOpen(!isModalOpen)}
                    />
                    {isModalOpen && <QuestionModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}

                </div>
                <div className="question__page__right__list">
                    <QuestionList />
                </div>
            </div>
        </div>
    )
}

export default QuestionPage;
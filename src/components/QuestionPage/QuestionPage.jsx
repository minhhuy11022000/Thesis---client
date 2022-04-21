import QuestionList from "./QuestionList/QuestionList";
import './QuestionPage.scss';
import { Link } from 'react-router-dom';
import SelectField from "../SelectField/SelectField";

const QuestionPage = () => {
    return (
        <div className="question__page__container">
            <div className="question__page__left">
                <Link to="/classes" className="link__child">All Questions</Link>
                <div className="child__field"><SelectField /></div>
            </div>
            <div className="question__page__right">
                <QuestionList />
            </div>
        </div>
    )
}

export default QuestionPage;
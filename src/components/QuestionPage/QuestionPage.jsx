import QuestionList from "./QuestionList/QuestionList";
import './QuestionPage.scss';
import { Link } from 'react-router-dom';
import SelectField from "../SelectField/SelectField";
import { useState, useEffect } from "react";
import QuestionModal from "../QuestionModal/QuestionModal";
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { getAllQuestions } from "../../api/QuestionRequests";
import UploadExcel from "../UploadExcel/UploadExcel";

const QuestionPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const subjectList = useSelector(
        (state) => state.joinedClasses.allClasses?.classes?.subjectList
    );

    const [subject, setSubject] = useState(subjectList[0]);
    console.log(subject)
    // console.log(subjectList)

    // useEffect(() => {
    //     getAllQuestions(subject, dispatch);
    // }, [subject, dispatch]);


    return (
        <div className="question__page__container">
            <div className="question__page__left">
                {/* <Link to="/classes" className="link__child">All Questions</Link> */}
                <div className="child__field"><SelectField subject={subject} setSubject={setSubject} subjectList={subjectList} /></div>
            </div>
            <div className="question__page__right">
                <div className="question__page__right__btn">
                    <Button
                        variant="contained"
                        children="Add new Question"
                        onClick={() => setIsModalOpen(!isModalOpen)}
                    />
                    {isModalOpen && <QuestionModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
                    <div>
                        <UploadExcel />
                    </div>
                </div>
                <div className="question__page__right__list">
                    <QuestionList subject={subject} />
                </div>
            </div>
        </div>
    )
}

export default QuestionPage;
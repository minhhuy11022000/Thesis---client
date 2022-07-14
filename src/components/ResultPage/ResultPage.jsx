import { Alert, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getListScoreOfStudentBySubject, getQuizAvgScore } from '../../api/ResultRequests';
import MultiChart from '../MultiChart/MultiChart';
import SelectTypeField from '../SelectTypeField/SelectTypeField';
import StudentChart from '../StudentChart/StudentChart';
import StudentRecord from '../StudentRecord/StudentRecord';
import './ResultPage.scss';

const ResultPage = () => {
    const [subject, setSubject] = useState('');
    const [classCode, setClassCode] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setClassCode((e.target.value).toUpperCase());
        // console.log((e.target.value).toUpperCase());
    }

    // useEffect(() => {
    //     getListScoreOfStudentBySubject(subject, dispatch);
    // }, [subject, dispatch]);

    const handleSubmitSearch = () => {
        if (!type) {
            <Alert onClose={() => { }}>You have to select Type of Visualization</Alert>
        } else {
            navigate(`${type}`)
            getListScoreOfStudentBySubject(classCode.toLocaleLowerCase(), dispatch);
            getQuizAvgScore(classCode, dispatch);
        }
    }

    const handleSubjectSearch = () => {
        navigate(`multiChart`)
    }

    const listScore = useSelector(state => state.results.listScoreBySubject);

    return (
        <div className='result__container'>
            <div className='result__input'>
                {/* <div> */}

                <TextField
                    className="result__search"
                    id="outlined-search"
                    label="Enter Class Code"
                    type="search"
                    onChange={handleSearch}
                />
                <div className="result__search">
                    <SelectTypeField type={type} setType={setType} />
                </div>
                <Button
                    className="result__search__btn"
                    onClick={handleSubmitSearch}
                    disabled={classCode === '' ? true : false}
                >
                    Search
                </Button>
                {/* </div> */}
            </div>
            <div>
                <TextField
                    className="result__search"
                    id="outlined-search"
                    label="Enter Subject"
                    type="search"
                    onChange={(e) => setSubject(e.target.value)}
                />
                <Button
                    className="result__search__btn"
                    onClick={handleSubjectSearch}
                    disabled={subject === '' ? true : false}
                >
                    Search
                </Button>
            </div>
            {/* <StudentChart /> */}
            <Routes>
                <Route path='Table' element={<StudentRecord listStudentScore={listScore} />} />
                <Route path='BarChart' element={<StudentChart />} />
                <Route path="multiChart" element={<MultiChart subject={subject} />} />
            </Routes>
        </div>
    );
}

export default ResultPage;
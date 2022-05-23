import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getListScoreOfStudentBySubject } from '../../api/ResultRequests';
import SelectTypeField from '../SelectTypeField/SelectTypeField';
import StudentChart from '../StudentChart/StudentChart';
import StudentRecord from '../StudentRecord/StudentRecord';
import './ResultPage.scss';

const ResultPage = () => {
    const [subject, setSubject] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setSubject((e.target.value).toUpperCase());
        console.log((e.target.value).toUpperCase());
    }

    // useEffect(() => {
    //     getListScoreOfStudentBySubject(subject, dispatch);
    // }, [subject, dispatch]);

    const handleSubmitSearch = () => {
        navigate(`${type}`)
        getListScoreOfStudentBySubject(subject, dispatch);
    }

    const listScore = useSelector(state => state.results.listScoreBySubject);

    return (
        <div className='result__container'>
            <div className='result__input'>
                <TextField
                    className="result__search"
                    id="outlined-search"
                    label="Enter subject"
                    type="search"
                    onChange={handleSearch}
                />
                <Button
                    className="result__search__btn"
                    onClick={handleSubmitSearch}
                    disabled={subject === '' ? true : false}
                >
                    Search
                </Button>
                <div className="result__search">
                    <SelectTypeField type={type} setType={setType} />
                </div>
            </div>
            {/* <StudentChart /> */}
            <Routes>
                <Route path='Table' element={<StudentRecord listStudentScore={listScore} />} />
                <Route path='BarChart' element={<StudentChart />} />
            </Routes>
        </div>
    );
}

export default ResultPage;
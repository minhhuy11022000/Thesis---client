import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './ResultPageStudent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import StudentResultPersonal from '../StudentResultPersonal/StudentResultPersonal';
import './ResultPageStudent.scss';
import { getPersonalScore } from '../../api/ResultRequests';

const ResultPageStudent = () => {
    const [subject, setSubject] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const studentId = useSelector(state => state.auth.login?.currentUser.uni_id)

    const handleSearch = (e) => {
        setSubject((e.target.value).toUpperCase());
    }

    const handleSubmitSearch = () => {
        navigate(`${subject}`)
        getPersonalScore(subject, studentId, dispatch);
    }

    return (
        <div className='result__container'>
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
            <Routes>
                {subject && <Route path={`${subject}`} element={<StudentResultPersonal subject={subject} studentId={studentId} />} />}
            </Routes>
        </div>
    );
}

export default ResultPageStudent;
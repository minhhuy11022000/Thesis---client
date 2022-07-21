import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './ResultPageStudent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import StudentResultPersonal from '../StudentResultPersonal/StudentResultPersonal';
import './ResultPageStudent.scss';
import { getPersonalScore } from '../../api/ResultRequests';

const ResultPageStudent = () => {
    const [classCode, setClassCode] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const studentId = useSelector(state => state.auth.login?.currentUser.uni_id)

    const handleSearch = (e) => {
        setClassCode(e.target.value);
    }

    const handleSubmitSearch = () => {
        navigate(`${classCode}`)
        getPersonalScore(classCode, studentId, dispatch);
        // setClassCode('')
    }

    return (
        <div className='result__container'>
            <TextField
                className="result__search"
                id="outlined-search"
                label="Enter Class Code"
                type="search"
                // value={classCode}
                onChange={handleSearch}
            />
            <Button
                className="result__search__btn"
                onClick={handleSubmitSearch}
                disabled={classCode === '' ? true : false}
            >
                Search
            </Button>
            <Routes>
                {classCode && <Route path={`${classCode}`} element={<StudentResultPersonal classCode={classCode} studentId={studentId} />} />}
            </Routes>
        </div>
    );
}

export default ResultPageStudent;
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './ResultPageStudent.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

const ResultPageStudent = () => {
    const [subject, setSubject] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setSubject((e.target.value).toUpperCase());
        console.log((e.target.value).toUpperCase());
    }

    const handleSubmitSearch = () => {
        // navigate(`${type}`)
        // getListScoreOfStudentBySubject(subject, dispatch);
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
        </div>
    );
}

export default ResultPageStudent;
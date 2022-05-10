import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import SelectTypeField from '../SelectTypeField/SelectTypeField';
import StudentChart from '../StudentChart/StudentChart';
import StudentRecord from '../StudentRecord/StudentRecord';
import './ResultPage.scss';

const ResultPage = () => {
    const [subject, setSubject] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        setSubject(e.target.value);
    }

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
                <Button className="result__search__btn" onChange={() => navigate(`${subject}`)}>
                    Search
                </Button>
                <div className="result__search">
                    <SelectTypeField type={type} setType={setType} />
                </div>
            </div>
            {/* <Link to={`${subject}`}>Search</Link> */}
            <Routes>
                {/* <Route path={`${subject}`} element={<StudentRecord />} /> */}
                <Route path='Table' element={<StudentRecord />} />
                <Route path='BarChart' element={<StudentChart />} />
            </Routes>
        </div>
    );
}

export default ResultPage;
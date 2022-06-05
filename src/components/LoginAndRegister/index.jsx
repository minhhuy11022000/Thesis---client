import { Tab, Paper, Box } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';

const LogInAndRegisterForm = () => {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle = {
        width: 400,
        margin: '20px auto'
    }

    return (
        <Paper style={paperStyle}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList variant='fullWidth' onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="SIGN IN" value="1" />
                        <Tab label="SIGN UP" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"><LoginPage handleChange={handleChange} /></TabPanel>
                <TabPanel value="2"><RegisterPage handleChange={handleChange} /></TabPanel>
            </TabContext>
        </Paper>
    );
}

export default LogInAndRegisterForm;
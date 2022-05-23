import { Tabs, Tab, Paper, Box } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';

const LogInAndRegisterForm = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"><LoginPage /></TabPanel>
                <TabPanel value="2"><RegisterPage /></TabPanel>
            </TabContext>
        </Paper>
    );
}

export default LogInAndRegisterForm;
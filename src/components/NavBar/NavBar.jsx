import * as React from 'react';
import { Link, useNavigate } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './NavBar.scss';
import Logo from '../../assets/public/IU_Logo.png';
import LogoutIcon from '@mui/icons-material/Logout';

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img className='image' src={Logo} alt="HCMIU" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link className='link__element' to="/">
                            Quizzatt
                        </Link>
                    </Typography>

                    <Typography color="inherit" onClick={() => navigate("/auth/login")}>Hi Ms. C</Typography>
                    <Button color="inherit" onClick={() => navigate("/auth/logout")}><LogoutIcon /></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
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
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '../../createInstance';
import { logOutSuccess } from '../../redux/authSlice';
import { logOut } from '../../api/AuthRequests';

export default function NavBar() {
    const user = useSelector(state => state.auth.login?.currentUser);
    const accessToken = user?.accessToken;
    const id = user?._id;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let axiosJWT = createAxios(user, dispatch, logOutSuccess)

    const handleLogOut = () => {
        logOut(dispatch, navigate, id, accessToken, axiosJWT)
    }

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
                        <img className='image' src={Logo} alt="HCMIU" onClick={() => navigate("/")} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link className='link__element' to="/">
                            Quizzatt
                        </Link>
                    </Typography>

                    <Typography color="inherit">Hi {user?.first_name}</Typography>
                    <Button color="inherit" onClick={handleLogOut}><LogoutIcon /></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
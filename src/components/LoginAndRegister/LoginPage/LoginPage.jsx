import { Grid, Paper, TextField, Button, Typography } from '@mui/material';
import './LoginPage.scss';
import Logo from '../../../assets/public/IU_Logo.png';
import { Link } from 'react-router-dom';

const LoginPage = ({ handleChange }) => {
    const paperStyle = {
        padding: '20px',
        height: '70vh',
        width: 280,
        margin: '0 auto'
    }
    const imageStyle = {
        width: 60,
        height: 60
    }
    const btnStyle = {
        margin: '8px 0'
    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <img style={imageStyle} src={Logo} alt='HCMIU-Logo' />
                    <h3>Sign In</h3>
                </Grid>
                <TextField label="Username" placeholder='Enter username' variant="standard" fullWidth required autoComplete='off' />
                <TextField label="Password" placeholder='Enter password' variant="standard" fullWidth required type="password" autoComplete='off' />
                <Button className='btn__input' variant='contained' corlor='primary' style={btnStyle} fullWidth>Sign In</Button>
                <Typography>
                    <Link to='auth/forgot'>Forgot password ?</Link>
                </Typography>
                <Typography> Do you have an account ? <Link to='#' onClick={() => handleChange('event', '2')}>Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default LoginPage;
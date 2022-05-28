import { Avatar, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Logo from '../../../assets/public/IU_Logo.png';
import './RegisterPage.scss';

const RegisterPage = () => {
    const paperStyle = {
        padding: '30px 20px',
        // 'padding-left': '20px',
        // 'padding-right': '20px',
        // 'padding-bottom': '30px',
        // 'padding-top': '30px',
        width: 300,
        margin: 'auto'
    }
    const imageStyle = {
        width: 60,
        height: 60
    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <img style={imageStyle} src={Logo} alt='HCMIU-Logo' />
                    <h3 className="header__style">Sign Up</h3>
                    <Typography variant="caption" >Please fill this form create an account.</Typography>
                </Grid>
                <div className="text__input__container">
                    <TextField className='textfield__input' variant="standard" fullWidth label="Full Name" required />
                    <TextField className='textfield__input' variant="standard" fullWidth label="Email" required />
                    <TextField className='textfield__input' variant="standard" fullWidth label="Student ID" required />
                    <TextField className='textfield__input' variant="standard" fullWidth label="Username" required />
                    <TextField className='textfield__input' variant="standard" fullWidth label="Password" required />
                    <TextField className='textfield__input' variant="standard" fullWidth label="Confirm Password" required />
                </div>
                <Button className='btn__input' variant="contained" corlor='primary' fullWidth>Sign Up</Button>
            </Paper>
        </Grid>
    );
}

export default RegisterPage;
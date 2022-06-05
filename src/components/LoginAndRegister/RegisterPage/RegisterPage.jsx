import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../api/AuthRequests";
import Logo from '../../../assets/public/IU_Logo.png';
import './RegisterPage.scss';

const RegisterPage = ({ handleChange }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [studentId, setStudentId] = useState("");

    const dispatch = useDispatch();
    const paperStyle = {
        padding: '30px 20px',
        width: 300,
        margin: 'auto'
    }
    const imageStyle = {
        width: 60,
        height: 60
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
            email: email,
            first_name: firstName,
            last_name: lastName,
            uni_id: studentId
        }
        registerUser(newUser, dispatch, handleChange)
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
                    <TextField className='textfield__input' variant="standard" fullWidth label="First Name" required onChange={(e) => setFirstName(e.target.value)} />
                    <TextField className='textfield__input' variant="standard" fullWidth label="Last Name" required onChange={(e) => setLastName(e.target.value)} />
                    <TextField className='textfield__input' variant="standard" fullWidth label="Email" required onChange={(e) => setEmail(e.target.value)} />
                    <TextField className='textfield__input' variant="standard" fullWidth label="Student ID" required onChange={(e) => setStudentId(e.target.value)} />
                    <TextField className='textfield__input' variant="standard" fullWidth label="Username" required onChange={(e) => setUsername(e.target.value)} />
                    <TextField className='textfield__input' variant="standard" fullWidth label="Password" required type="password" onChange={(e) => setPassword(e.target.value)} />
                    {/* <TextField className='textfield__input' variant="standard" fullWidth label="Confirm Password" required /> */}
                </div>
                <Button className='btn__input' variant="contained" corlor='primary' fullWidth onClick={handleRegister}>Sign Up</Button>
            </Paper>
        </Grid>
    );
}

export default RegisterPage;
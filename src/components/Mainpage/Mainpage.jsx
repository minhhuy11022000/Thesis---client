import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './MainPage.scss';
import { Box, CircularProgress, Typography } from "@mui/material";

const MainPage = () => {
    const user = useSelector(state => state.auth.login?.currentUser);
    const loginPending = useSelector(state => state.auth.login.isFetching);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/auth/login")
        }
    }, [user, navigate])

    if (loginPending) {
        return (
            <Box textAlign='center' >
                <CircularProgress color='inherit' />
            </Box >
        )
    }

    return (
        <div className="mainpage__container">
            <Typography align="center" variant="h5">Your role: {user?.isLecturer ? `Lecturer` : `Student`}</Typography>
            <Link to={`/classes/${user?.isLecturer ? "lecturer" : "student"}`} className="link__child">Classes</Link>
            {user?.isLecturer && <Link to="/questions" className="link__child">Questions</Link>}
            <Link to={`/results/${user?.isLecturer ? '' : user?.uni_id}`} className="link__child" >Class Result</Link>
        </div>
    );
}

export default MainPage;
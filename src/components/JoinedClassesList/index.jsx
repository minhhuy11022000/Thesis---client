import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getClasses } from "../../api/ClassRequests";
import JoinedClass from "./JoinedClass/JoinedClass";
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import './JoinedClassesList.scss';

const JoinedClassesList = () => {
    const dispatch = useDispatch();

    const classData = useSelector(
        (state) => state.joinedClasses.allClasses?.classes
    );

    const pending = useSelector(state => state.joinedClasses.allClasses.pending);
    const user = useSelector(state => state.auth.login?.currentUser);

    useEffect(() => {
        getClasses(dispatch);
    }, [dispatch]);

    if (pending) {
        return (
            <Box textAlign='center' >
                <CircularProgress color='inherit' />
            </Box >
        )
    }

    return (
        <div className="joined__class__container">
            <div className="joined__class__btn">

                <Button variant="contained">{user?.isLecturer ? `Create class` : `Join class`}</Button>
            </div>
            <ul className="joined">
                {classData.map((joinedClass) => {
                    return (
                        <JoinedClass key={joinedClass._id} classData={joinedClass} />
                    );
                })}
            </ul>
        </div>
    );
}

export default JoinedClassesList;
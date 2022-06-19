import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getClasses, getClassStudentRole } from "../../api/ClassRequests";
import JoinedClasses from "../JoinedClassesList/JoinedClass/JoinedClass";
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import './JoinedClassesStudent.scss';
import StudentClasses from "./StudentClasses/StudentClasses";

const JoinedClassesStudent = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.login?.currentUser);
    const userId = user?.uni_id;

    useEffect(() => {
        getClassStudentRole(userId, dispatch)
    }, [userId, dispatch]);

    const classData = useSelector(
        (state) => state.joinedClasses.allClasses?.studentClasses?.classesReturn
    );

    const pending = useSelector(state => state.joinedClasses.allClasses?.pending);


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

                <Button variant="contained">Join class</Button>
            </div>
            <ul className="joined">
                {classData?.map((joinedClass) => {
                    return (
                        <StudentClasses key={joinedClass?.class_code} classData={joinedClass} />
                    );
                })}
            </ul>
        </div>
    );
}

export default JoinedClassesStudent;
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getClasses } from "../../api/ClassRequests";
import JoinedClass from "./JoinedClass/JoinedClass";
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const JoinedClassesList = () => {
    const dispatch = useDispatch();

    const classData = useSelector(
        (state) => state.joinedClasses.allClasses?.classes
    );

    const pending = useSelector(state => state.joinedClasses.allClasses.pending);

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
        <ul className="joined">
            {classData.map((joinedClass) => {
                return (
                    <JoinedClass key={joinedClass._id} classData={joinedClass} />
                );
            })}
        </ul>
    );
}

export default JoinedClassesList;
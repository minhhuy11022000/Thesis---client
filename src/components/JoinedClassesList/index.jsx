import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getClasses } from "../../redux/apiRequests";
import JoinedClass from "./JoinedClass/JoinedClass";
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from "react-router-dom";

const JoinedClassesList = () => {
    const dispatch = useDispatch();

    const classData = useSelector(
        (state) => state.joinedClasses.allClasses.classes
    );

    const pending = useSelector(state => state.joinedClasses.allClasses.pending);

    useEffect(() => {
        getClasses(dispatch);
    }, [dispatch]);


    return (
        <div>
            {pending ? <CircularProgress color="inherit" /> : (

                <ul className="joined">
                    {classData.map((joinedClass) => {
                        return (
                            <JoinedClass key={joinedClass._id} classData={joinedClass} />
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default JoinedClassesList;
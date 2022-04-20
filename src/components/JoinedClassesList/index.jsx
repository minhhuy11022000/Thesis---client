import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getClasses } from "../../redux/apiRequests";
import JoinedClass from "./JoinedClass/JoinedClass";
import { Link } from "react-router-dom";

const JoinedClassesList = () => {
    const dispatch = useDispatch();

    const classData = useSelector(
        (state) => state.joinedClasses.allClasses.classes
    );

    useEffect(() => {
        getClasses(dispatch);
    }, [dispatch, classData]);


    return (
        <ul className="joined">
            {classData.map((joinedClass) => {
                return (
                    <JoinedClass key={joinedClass._id} classData={joinedClass} />
                );
            })}
        </ul>
        // <h1>This is JoinClassesList</h1>
    );
}

export default JoinedClassesList;
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getClasses } from "../../api/ClassRequests";
import JoinedClass from "./JoinedClass/JoinedClass";
import CircularProgress from '@mui/material/CircularProgress';
// import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import './JoinedClassesList.scss';
import CreateClassModal from "../CreateClassModal/CreateClassModal";

const JoinedClassesList = () => {
    const [openCreateClass, setOpenCreateClass] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.login?.currentUser);
    const userId = user?.uni_id;

    useEffect(() => {
        getClasses(userId, dispatch);
    }, [userId, dispatch]);

    const classData = useSelector(
        (state) => state.joinedClasses.allClasses?.classes?.classesReturn
    );

    console.log(classData)

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

                <Button variant="contained" onClick={() => setOpenCreateClass(!openCreateClass)}>Create class</Button>
                {openCreateClass && <CreateClassModal openCreateClass={openCreateClass} setOpenCreateClass={setOpenCreateClass} lecturerId={userId} />}
            </div>
            <ul className="joined">
                {classData?.map((joinedClass) => {
                    return (
                        <JoinedClass key={joinedClass?._id} classData={joinedClass} />
                    );
                })}
            </ul>
        </div>
    );
}

export default JoinedClassesList;
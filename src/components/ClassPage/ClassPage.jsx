import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getClass } from "../../redux/apiRequests";
import "./ClassPage.scss";
import { TextField, Button, Avatar, CircularProgress } from "@mui/material";
import { useState } from "react";
import { getAllQuizzes } from "../../api/QuizRequest";
import QuizzesList from "../QuizzesList/QuizzesList";

const ClassPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        getClass(id, dispatch);
    }, [dispatch, id]);

    useEffect(() => {
        getAllQuizzes(dispatch);
    }, [dispatch]);

    const classData = useSelector(state => state.joinedClasses.allClasses.selectedClass);
    const quizzesData = useSelector(state => state.quizzes.allQuizzes);
    console.log(quizzesData);

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const pending = useSelector(state => state.joinedClasses.allClasses.pending);
    // const error = useSelector(state => state.allClasses.error);

    return (
        // <div>
        //     This is ClassPage of class {id}
        // </div>

        <div className="main">
            {pending ? <CircularProgress color="inherit" /> : (

                <div className="main__wrapper">
                    <div className="main__content">
                        <div className="main__wrapper1">
                            <div className="main__bgImage">
                                <div className="main__emptyStyles" />
                            </div>
                            <div className="main__text">
                                <h1 className="main__heading main__overflow">
                                    {classData.className}
                                </h1>
                                <div className="main__section main__overflow">
                                    {classData.section}
                                </div>
                                <div className="main__wrapper2">
                                    <em className="main__code">Class Code :</em>
                                    <div className="main__id">{classData._id}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main__announce">
                        <div className="main__status">
                            <p>Upcoming</p>
                            <p className="main__subText">No work due</p>
                        </div>
                        <div className="main__announcements">
                            <div className="main__announcementsWrapper">
                                <div className="main__ancContent">
                                    {showInput ? (
                                        <div className="main__form">
                                            <TextField
                                                id="filled-multiline-flexible"
                                                multiline
                                                label="Announce Something to class"
                                                variant="filled"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                            />
                                            <div className="main__buttons">
                                                <div>
                                                    <Button onClick={() => setShowInput(false)}>
                                                        Cancel
                                                    </Button>
                                                    <Button color="primary" variant="contained">
                                                        Post
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            className="main__wrapper100"
                                            onClick={() => setShowInput(true)}
                                        >
                                            <Avatar />
                                            <div className="">Announce something to class</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main__quizzes">
                        <QuizzesList quizzesData={quizzesData} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ClassPage;
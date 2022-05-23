import "./App.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getClasses } from "./redux/apiRequests";
import JoinedClassesList from "./components/JoinedClassesList";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/Mainpage/Mainpage";
import ClassPage from "./components/ClassPage/ClassPage";
import QuestionPage from "./components/QuestionPage/QuestionPage";
import QuizPage from "./components/QuizPage/QuizPage";
import ResultPage from "./components/ResultPage/ResultPage";
import LogInAndRegisterForm from "./components/LoginAndRegister";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   getClasses(dispatch);
  // }, [dispatch]);
  // const classData = useSelector(
  //   (state) => state.joinedClasses.allClasses.classes
  // );
  // console.log(classData);
  return (
    <BrowserRouter className="App">
      <NavBar />

      <Routes>
        <Route path="/auth/login" element={<LogInAndRegisterForm />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/classes" element={<JoinedClassesList />} />
        <Route path="/classes/:id" element={<ClassPage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/quizzes/:id" element={<QuizPage />} />
        <Route path="/results/*" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

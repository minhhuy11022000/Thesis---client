import "./App.scss";
import { useSelector } from "react-redux";
import JoinedClassesList from "./components/JoinedClassesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/Mainpage/Mainpage";
import ClassPage from "./components/ClassPage/ClassPage";
import QuestionPage from "./components/QuestionPage/QuestionPage";
import QuizPage from "./components/QuizPage/QuizPage";
import ResultPage from "./components/ResultPage/ResultPage";
import LogInAndRegisterForm from "./components/LoginAndRegister";
import ResultPageStudent from "./components/ResultPageStudent/ResultPageStudent";

function App() {
  const user = useSelector((state) => state.auth.login?.currentUser);

  return (
    <BrowserRouter className="App">
      {user && <NavBar />}

      <Routes>
        <Route path="/auth/login" element={<LogInAndRegisterForm />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/classes" element={<JoinedClassesList />} />
        <Route path="/classes/:id" element={<ClassPage />} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/quizzes/:id" element={<QuizPage />} />
        {user?.isLecturer ? (
          <Route path="/results/*" element={<ResultPage />} />
        ) : (
          <Route path="/results/:id/*" element={<ResultPageStudent />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

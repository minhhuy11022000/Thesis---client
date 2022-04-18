import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getClasses } from "./redux/apiRequests";
import JoinedClassesList from "./components/JoinedClassesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<JoinedClassesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

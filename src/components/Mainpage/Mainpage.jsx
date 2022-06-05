import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './MainPage.scss';

const MainPage = () => {
    const user = useSelector(state => state.auth.login?.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/auth/login")
        }
    }, [user, navigate])

    return (
        <div className="mainpage__container">
            <Link to="/classes" className="link__child">Classes</Link>
            <Link to="/questions" className="link__child">Questions</Link>
            <Link to="/results" className="link__child" >Class Result</Link>
        </div>
    );
}

export default MainPage;
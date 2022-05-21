import { Link } from "react-router-dom";
import './MainPage.scss';

const MainPage = () => {
    return (
        <div className="mainpage__container">
            <Link to="/classes" className="link__child">Classes</Link>
            <Link to="/questions" className="link__child">Questions</Link>
            <Link to="/results" className="link__child" >Class Result</Link>
        </div>
    );
}

export default MainPage;
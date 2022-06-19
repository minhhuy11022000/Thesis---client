import { Link, Route } from "react-router-dom";
import "./StudentClasses.scss";

const StudentClasses = ({ classData }) => {
    return (
        <li className="joined__list">
            <div className="joined__container">
                <div className="joined__imgWrapper" />
                <div className="joined__image" />
                <div className="joined__content">
                    <Link to={`/classes/${classData.class_code}`} className="joined__title" href="">
                        <h2>{classData.class_name}</h2>
                    </Link>
                    <p className="joined__section">{classData.section}</p>
                    <p className="joined__room">{classData.room}</p>
                </div>
            </div>
            <div className="joined__bottom">
                {/* <PermContactCalendar />
        <FolderOpen /> */}
            </div>
        </li>
    );
}

export default StudentClasses;
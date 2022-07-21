import { Link } from "react-router-dom";
import "./JoinedClass.scss";

const JoinedClasses = ({ classData }) => {
    return (
        <li className="joined__list">
            <div className="joined__container">
                <div className="joined__imgWrapper" />
                <div className="joined__image" />
                <div className="joined__content">
                    <Link to={`/classes/${classData._id}`} className="joined__title" href="">
                        <h2>{classData.class_name}</h2>
                    </Link>
                    <p className="joined__section">{classData.section}</p>
                    <p className="joined__section">{classData?.day_of_week}</p>
                    <p className="joined__room">{classData.room}</p>
                </div>
            </div>
            <div className="joined__bottom">
                {/* <PermContactCalendar />
        <FolderOpen /> */}
            </div>
        </li>
    );
};

export default JoinedClasses;


// import { Avatar } from "@material-ui/core";
// import { FolderOpen, PermContactCalendar } from "@material-ui/icons";
import { Link, Route } from "react-router-dom";
import "./JoinedClass.scss";

const JoinedClasses = ({ classData }) => {
    // console.log(classData);
    // const [classData] = useState({
    //     id: 1,
    //     className: "Web Application Development",
    //     owner: "Minh Huy",
    // });
    return (
        <li className="joined__list">
            <div className="joined__container">
                <div className="joined__imgWrapper" />
                <div className="joined__image" />
                <div className="joined__content">
                    <section className="joined__title" href="">
                        <h2>{classData.className}</h2>
                    </section>
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
};

export default JoinedClasses;


import "./../App.css";
import "./../style.css";
import { ReactComponent as WorkIcon } from "./../work.svg";
import { ReactComponent as SchoolIcon } from "./../school.svg";
import timelineElements from "../timelineElements";
import {VerticalTimeline,VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function HomePage() {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    return (
        <div>
      <h1 className="timeline-intro">Chicago is known for its history of police violence.</h1>
      <h2 className="timeline-intro">Below is an interactive timeline of CPD brutality and police related activism throughout our city's history</h2>
      <VerticalTimeline layout={"1-column-right"}>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
    )
}

export default HomePage

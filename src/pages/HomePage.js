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
      <div class="block-centered-close">
        <h2 className="timeline-intro">An interactive timeline of CPD brutality and police related activism throughout our city’s history.</h2>
        <VerticalTimeline layout={"1-column-right"}>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonLink !== undefined &&
              element.buttonLink !== null &&
              element.buttonLink !== "";
            let showButton2 =
              element.buttonLink2 !== undefined &&
              element.buttonLink2 !== null &&
              element.buttonLink2 !== "";
            let showButton3 =
              element.buttonLink3 !== undefined &&
              element.buttonLink3 !== null &&
              element.buttonLink3 !== "";

            return (
              <VerticalTimelineElement
                key={element.key}
                // date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>

                <h3 className="vertical-timeline-element-date">
                  {element.date}
                </h3>
                
                <p id="description">{element.description}</p>

                <h4 className="vertical-timeline-element-source">
                   Learn More ↓
                </h4>
                {showButton && (
                  <a target="_blank" rel="noreferrer"
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href={`${element.buttonLink}`}
                  >
                    {element.buttonText}
                  </a>
                )}
                {showButton2 && (
                  <a target="_blank" rel="noreferrer"
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href={`${element.buttonLink2}`}
                  >
                    {element.buttonText2}
                  </a>
                )}
                {showButton3 && (
                  <a target="_blank" rel="noreferrer"
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href={`${element.buttonLink3}`}
                  >
                    {element.buttonText3}
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

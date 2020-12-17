import "./../App.css";
import "./../style.css";
// import { ReactComponent as WorkIcon } from "./../work.svg";
// import { ReactComponent as SchoolIcon } from "./../school.svg";
import timelineElements from "../timelineElements";
import {VerticalTimeline,VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function HomePage() {
    return (
      <div class="block-centered-close">
        <h1 className="timeline-intro">An interactive timeline of abuse of power by the Chicago Police Department and activism related to police brutality throughout our city’s history.</h1>
        <VerticalTimeline layout={"1-column-right"}>
          {timelineElements.map((element) => {
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
                dateClassName="date"
                icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="linear-gradient" y1="250" x2="500" y2="250" gradientTransform="translate(501.85 1.86) rotate(90.42)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b6c0a0"/><stop offset="1" stop-color="#869167"/></linearGradient><linearGradient id="linear-gradient-2" x1="0" y1="228.35" x2="500" y2="228.35" href="#linear-gradient"/><linearGradient id="linear-gradient-3" x1="9.88" y1="250" x2="490.12" y2="250" gradientTransform="translate(500 0) rotate(90)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#869167"/><stop offset="1" stop-color="#b6c0a0"/></linearGradient><linearGradient id="linear-gradient-4" x1="12.87" y1="250" x2="476.44" y2="250" gradientTransform="translate(536.77 43.2) rotate(99.2)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#dde2cf"/><stop offset="0.07" stop-color="#cfd6be"/><stop offset="0.18" stop-color="#c1c9ae"/><stop offset="0.31" stop-color="#b7c0a2"/><stop offset="0.49" stop-color="#b2bb9b"/><stop offset="1" stop-color="#b0ba99"/></linearGradient><radialGradient id="radial-gradient" cx="250" cy="250" fx="426.9521664060269" fy="358.3595630701245" r="232.93" gradientTransform="translate(536.77 43.2) rotate(99.2)" gradientUnits="userSpaceOnUse"><stop offset="0.01" stop-color="#869167" stop-opacity="0.64"/><stop offset="0.4" stop-color="#879268" stop-opacity="0.63"/><stop offset="0.54" stop-color="#8a956c" stop-opacity="0.58"/><stop offset="0.65" stop-color="#919b74" stop-opacity="0.5"/><stop offset="0.73" stop-color="#99a47e" stop-opacity="0.38"/><stop offset="0.8" stop-color="#a5af8b" stop-opacity="0.23"/><stop offset="0.86" stop-color="#b2bd9c" stop-opacity="0.05"/><stop offset="0.87" stop-color="#b6c0a0" stop-opacity="0"/></radialGradient><radialGradient id="radial-gradient-2" cx="250" cy="250" fx="362.1699618566187" fy="79.6981190062491" r="232.97" gradientUnits="userSpaceOnUse"><stop offset="0.09" stop-color="#fff"/><stop offset="0.29" stop-color="#eaede3" stop-opacity="0.71"/><stop offset="0.48" stop-color="#d7ddcb" stop-opacity="0.46"/><stop offset="0.65" stop-color="#c9d0b9" stop-opacity="0.26"/><stop offset="0.8" stop-color="#bfc7ab" stop-opacity="0.12"/><stop offset="0.92" stop-color="#b8c2a3" stop-opacity="0.03"/><stop offset="1" stop-color="#b6c0a0" stop-opacity="0"/></radialGradient></defs><g id="Ellipses"><g id="Ellipse"><path class="cls-1" d="M44.57,107.51A248.77,248.77,0,0,0,0,248.15C-1,386.21,110.08,499,248.15,500S499,389.92,500,251.85c0-3.35,0-6.68-.14-10C328.81,235.23,175.4,193.72,44.57,107.51Z" transform="translate(0 0)"/><path class="cls-2" d="M251.85,0A249.71,249.71,0,0,0,44.57,107.51C175.4,193.72,328.81,235.23,499.85,241.85,495.59,108.39,386.57,1,251.85,0Z" transform="translate(0 0)"/></g><ellipse id="Ellipse-2" data-name="Ellipse" class="cls-3" cx="250" cy="250" rx="239.76" ry="240.08"/><ellipse id="Ellipse-3" data-name="Ellipse" class="cls-4" cx="250" cy="250" rx="237.17" ry="237.13"/><ellipse id="Ellipse-4" data-name="Ellipse" class="cls-5" cx="250" cy="250" rx="232.95" ry="232.91"/><ellipse id="Ellipse-5" data-name="Ellipse" class="cls-6" cx="250" cy="250" rx="232.95" ry="232.91"/></g><g id="Text_Shadow" data-name="Text Shadow"><g id="Text_Shadow-2" data-name="Text Shadow" class="cls-7"><image width="415" height="213" transform="translate(66 154)"/></g></g><g id="Text"><text id="Text-2" data-name="Text" class="cls-8" transform="translate(105.43 293.02)">{element.startYear}</text></g><g id="Highlight"><path id="Highlight-2" data-name="Highlight" class="cls-9" d="M251.85,0A249.71,249.71,0,0,0,44.57,107.51C175.4,193.72,328.81,235.23,499.85,241.85,495.59,108.39,386.57,1,251.85,0Z" transform="translate(0 0)"/></g></svg>}
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
                <div class="element-buttons">
                  {showButton && (
                    <a target="_blank" rel="noreferrer"
                      className="button elementButton"
                      href={`${element.buttonLink}`}
                    >
                      {element.buttonText}
                    </a>
                  )}
                  {showButton2 && (
                    <a target="_blank" rel="noreferrer"
                      className="button elementButton"
                      href={`${element.buttonLink2}`}
                    >
                      {element.buttonText2}
                    </a>
                  )}
                  {showButton3 && (
                    <a target="_blank" rel="noreferrer"
                      className="button elementButton"
                      href={`${element.buttonLink3}`}
                    >
                      {element.buttonText3}
                    </a>
                  )}
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    )
}

export default HomePage

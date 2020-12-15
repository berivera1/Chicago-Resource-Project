import React from 'react'
import memberElements from "../memberElements";

function About() {
    return (
        <>
            <div  class="block-centered-comfortable">
                <div className="about-title">
                    <h1>About Us</h1>
                </div>

                <div className="about-summary">
                    <p>Chicago Resource Project was made in fifteen weeks as an Interactive Arts + Media team sprint at Columbia College Chicago. Our group was inspired by the civil rights protests of 2020, and chose to collect historical events of CPD brutality and activism for an interactive timeline.</p>
                    <p>We hope you can use this platform to learn more about these topics as they relate to the city of Chicago. This timeline is not comprehensive, so please check out our resources page for more materials and links to the local organizations that guided our own research.</p>
                </div>

                <div className="body-container">
                    <div className="section-title">
                        <h2> Vision Statement</h2>
                    </div>

                    <div className="section-description">
                        <p>The objective of our project is to create an interactive timeline that serves as a source to locate information regarding police brutality in our city, and the many harsh realities of its existence in our society today. We are aware that we may have made errors, and hope to mend any as they are discovered. This project is meant to be a continuous work in progress, and we remain fully open to critique from our users.  </p>
                    </div>

                    <div className="section-link">
                        {/* TODO */}
                        {/* <a href="">Link to Resoures/Donation Page</a> */}
                    </div>

                    <div className="section-title">
                        <h2>Project Overview</h2>
                    </div>

                    <div className="section-description">
                        <p>As Columbia students, our campus and the surrounding community have witnessed and been affected by very recent historic civil unrest. For many, George Floyd’s death under the knee of a Minneapolis police officer was a blunt reminder of Chicago’s racial divide and prolonged history of police brutality against African Americans.</p>
                    </div>

                    <div className="section-title">
                        <h2>Team Overview</h2>
                    </div>

                    <div className="team-list block-centered-comfortable">
                    {memberElements.map((element) => {
                        return (
                            <div className="member-container">
                                <div className="member-picture">
                                    <img src={`${element.picture}`} alt={`${element.name}`} width={"150"} height={"150"}></img>
                                </div>
                                <div className="member-name">
                                    <p><b>{`${element.name}`}</b><br />{`${element.titles}`}</p>
                                </div>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About

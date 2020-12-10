import React from 'react'

function Resources() {
    return (
        <>
            <div className="body-container block-centered-comfortable">
                <div className="body-title">
                    <h1>Resource and Organization List</h1>
                </div>
                <div className="body-description">
                    <p>This page has links to articles and sources where you can read more about the events from our timeline. We Charge Genocide and Black Lives Matter Chicago are two of the local ongoing organizations that guided the content of this project the most. Visit their websites to find more related materials and organizations.</p>
                </div>
                <div className="body-container">
                    <div className="section-title">
                        <h2>Chicago Organizations</h2>
                    </div>
                    <div className="team-list block-centered-comfortable">
                        <div className="member-container">
                            <div className="member-picture">
                                <img src="/images/example-team-member.png" alt="Example Team Member's Name" width={"150"} height={"150"}></img>
                            </div>
                            <div className="member-name">
                                <p><b>It him</b><br />Development + Research</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-title">
                        <h2>Mutual Aid Funds</h2>
                    </div>
                    <div className="team-list block-centered-comfortable">
                        <div className="member-container">
                            <div className="member-picture">
                                <img src="/images/example-team-member.png" alt="Example Team Member's Name" width={"150"} height={"150"}></img>
                            </div>
                            <div className="member-name">
                                <p><b>O shit whaddup?</b><br />Development + Research</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources

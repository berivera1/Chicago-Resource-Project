import React from 'react'
import orgElements from "../orgElements";
import natElements from "../natElements";

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
                    {orgElements.map((element) => {
                        let showSecondDonationButton =
                        element.donateButtonLinkB !== undefined &&
                        element.donateButtonLinkB !== null &&
                        element.donateButtonLinkB !== "";
                        return (
                            <div className="org-container">
                                <h3 className="org-name">{`${element.name}`}</h3>
                                <p id="description">{element.description}</p>
                                <a target="_blank" rel="noreferrer" className="org-button elementButton" href={`${element.infoButtonLink}`}>
                                    {element.infoButtonText}
                                </a>
                                <a target="_blank" rel="noreferrer" className="org-button elementButton" href={`${element.donateButtonLink}`}>
                                    {element.donateButtonText}
                                </a>
                                {showSecondDonationButton && (
                                <a target="_blank" rel="noreferrer" className="org-button elementButton" href={`${element.donateButtonLinkB}`}>
                                    {element.donateButtonTextB}
                                </a>
                                )}
                            </div>
                        );
                    })}
                    </div>
                    
                    <div className="section-title">
                        <h2>National Organizations</h2>
                    </div>
                    <div className="team-list block-centered-comfortable">
                    {natElements.map((element) => {
                        let showSecondDonationButton =
                        element.donateButtonLinkB !== undefined &&
                        element.donateButtonLinkB !== null &&
                        element.donateButtonLinkB !== "";
                        return (
                            <div className="org-container">
                                <h3 className="org-name">{`${element.name}`}</h3>
                                <p id="description">{element.description}</p>
                                <a target="_blank" rel="noreferrer" className="org-button elementButton" href={`${element.infoButtonLink}`}>
                                    {element.infoButtonText}
                                </a>
                                <a target="_blank" rel="noreferrer" className="org-button elementButton" href={`${element.donateButtonLink}`}>
                                    {element.donateButtonText}
                                </a>
                                {showSecondDonationButton && (
                                <a target="_blank" rel="noreferrer" className="org-button elementButton" href={`${element.donateButtonLinkB}`}>
                                    {element.donateButtonTextB}
                                </a>
                                )}
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources

import React from 'react'
import orgElements from "../orgElements";
import mafElements from "../mafElements";

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
                        return (
                            <div className="org-container">
                                <div className="org-picture">
                                    <img src={`${element.logo}`} alt={`${element.name}`} width={"150"} height={"150"}></img>
                                </div>
                                <div className="org-name">
                                    <p><b>{`${element.name}`}</b><br />{`${element.description}`}</p>
                                </div>
                                <a target="_blank" rel="noreferrer" className="button workButton" href={`${element.buttonLink}`}>
                                    {element.buttonText}
                                </a>
                            </div>
                        );
                    })}
                    </div>
                    
                    <div className="section-title">
                        <h2>Mutual Aid Funds</h2>
                    </div>
                    <div className="team-list block-centered-comfortable">
                    {mafElements.map((element) => {
                        return (
                            <div className="maf-container">
                                <div className="maf-picture">
                                    <img src={`${element.logo}`} alt={`${element.name}`} width={"150"} height={"150"}></img>
                                </div>
                                <div className="maf-name">
                                    <p><b>{`${element.name}`}</b><br />{`${element.description}`}</p>
                                </div>
                                <a target="_blank" rel="noreferrer" className="button schoolButton" href={`${element.buttonLink}`}>
                                    {element.buttonText}
                                </a>
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

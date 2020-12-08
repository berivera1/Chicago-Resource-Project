import React from 'react'

function Resources() {
    return (
        <>
            <div className="body-container">
                <div className="body-title">
                    <h2>Resource and Organization List</h2>
                </div>
                <div className="body-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem delectus, molestiae enim dolorem id ipsum quas et fugiat corporis excepturi ab odit animi ea reiciendis quos dignissimos facilis a?</p>
                </div>

                <div className="section-title">
                    <h3>Chicago Organizations</h3>
                </div>
                <div className="organization-list">
                    <div className="organization-container">
                        <div className="organization-title">
                            <h4>Organization Title</h4>
                        </div>
                        <div className="chiago-organization-picture">
                            <img src="/images/example-resource-logo.png" alt="Example Mutual Aid Fund Name" width={"100"} height={100}></img>
                        </div>
                        <div className="organization-summary">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem delectus, molestiae enim dolorem id ipsum quas et fugiat corporis excepturi ab odit animi ea reiciendis quos dignissimos facilis a?</p>
                        </div>
                        <div className="organization-link">
                            <a target="_blank" href="http://example.com/" rel="noopener noreferrer">Visit Example Organization</a>
                        </div>
                    </div>
                </div>

                <div className="section-title">
                    <h3>Mutual Aid Funds</h3>
                </div>
                <div className="maf-list">
                    <div className="maf-container">
                        <div className="maf-title">
                            <h4>Mutual Aid Fund Title</h4>
                        </div>
                        <div className="maf-picture">
                            <img src="/images/example-resource-logo.png" alt="Example Mutual Aid Fund Name" width={"100"} height={100}></img>
                        </div>
                        <div className="organization-summary">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem delectus, molestiae enim dolorem id ipsum quas et fugiat corporis excepturi ab odit animi ea reiciendis quos dignissimos facilis a?</p>
                        </div>
                        <div className="organization-link">
                            <a target="_blank" href="http://example.com/" rel="noopener noreferrer">Donate</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources

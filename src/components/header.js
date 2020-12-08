import React from 'react'
import { Link} from "react-router-dom"

function Header() {
    function clickHandler(event) {
        const overlay = document.getElementById("navbar");
        overlay.style.visibility = "hidden"
    }

    function toggleHamburger(event) {
        const overlay = document.getElementById("navbar");
        //What this if statement below states is that whenever the hamburger gets toggled adjust the width of the nav overlay - if the overlay is at 100% width and open then it needs to go down to 0% and closed.
        if (overlay.style.width === "100%") {
            overlay.style.width = "0%"
        } else if ((overlay.style.visibility = "hidden")) {
            overlay.style.visibility = "visible"
            overlay.style.width = "100%";
        }
        event.preventDefault()
    }

    return (
        <>
            <div className="banner-container">
                <div className="banner-image">
                <img src="./images/skylineasset1.png" alt="Skyline Asset"></img>
                </div>
                <div className="burger-container" onClick = {toggleHamburger}>
                    <span style={{fontSize: '42px', cursor: 'pointer'}} id="hamburger">☰</span>
                    <div className="overlay-container">
                <div id="navbar" className="overlay">
                    <div id="overlay-links">
                        <Link id="nav" onClick={clickHandler} to="/">Home</Link>
                        <Link id="nav" onClick={clickHandler} to="/about">About</Link>
                        <Link id="nav" onClick={clickHandler} to="/resources">Resource</Link>
                    </div>
                    {/* <a href={{javascript:void(0)}} className="closebtn" onClick={toggleHamburger}>&times;</a> */}
                </div>
            </div>
                </div>
            </div>
        </>
    )
}

export default Header

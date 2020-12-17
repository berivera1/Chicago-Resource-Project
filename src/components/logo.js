import { Link } from "react-router-dom"

function Logo () {
    function clickHandler(event) {
        const overlay = document.getElementById("navbar");
        overlay.style.visibility = "hidden"
    }

    return (
        <div className="header-container">
            <div className="header-img-container">
                <Link id="nav" onClick={clickHandler} to="/">
                    <div className="header-img">
                        <img src="./images/CRPLogo.png" class="logo" alt="CPRLogo"></img>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Logo
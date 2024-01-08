import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../elements/MobileNav.css"
import "../../App.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons'

function MobileNav() {
    return (
        <div className="topnav">
            <Link to="/" className="site-title">Sebastian Hartmann IT</Link>
            <div id="myLinks">
                <CustomLink to="/About">Über Mich</CustomLink>
                <CustomLink to="/CV">Lebenslauf</CustomLink>
                <CustomLink to="/Kontakt">Kontakt</CustomLink>
            </div>
            <a href="/" className="icon" onClick={ActionLink}>
                <FontAwesomeIcon icon={faBars} />
            </a>
        </div>
    );
}

const ActionLink = (e) => {
    e.preventDefault();
    return myFunction();
}

function myFunction() {
    var x = document.getElementById("myLinks");
    console.log("test")
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default MobileNav;
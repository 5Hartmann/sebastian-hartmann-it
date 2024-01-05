import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Sebastian Hartmann IT</Link>
        <ul>
                <CustomLink to="/About">Über Mich</CustomLink>
                <CustomLink to="/CV">Lebenslauf</CustomLink>
                <CustomLink to="/Kontakt">Kontakt</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props }) {
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

export default Navbar;
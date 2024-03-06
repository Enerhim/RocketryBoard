import { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { User } from "firebase/auth";

interface NavbarProps {
    isSignedIn: boolean
    signedInUser?: User|null
}

function Navbar({isSignedIn, signedInUser} : NavbarProps) {
    return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="./">
                      🚀 Rocketry Board
                    </Link>
                    {/* Responsive Toggle*/}
                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                      {/* Nav Items */}
                        <ul className="navbar-nav">
                            <CustomLink  to="/updates">Updates</CustomLink>
                            <CustomLink  to="/leaderboard">Leaderboard</CustomLink>
                            <CustomLink  to="/submit">Submit</CustomLink>
                        </ul>
                        {isSignedIn ? 
                        <div className="d-flex ms-auto navr text-white">
                            {signedInUser?.displayName}
                            <LogoutBtn></LogoutBtn>
                        </div>
                        : 
                        <div className="d-flex ms-auto navr">
                            <CustomLink  to="/register">Register | Login</CustomLink>
                        </div>
                        }
                    </div>
                </div>
            </nav>
    );
}

interface CustomLinkProps {
    to: string
    children: ReactNode
}

function CustomLink({to, children, ...props} : CustomLinkProps) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={"nav-item " + (isActive ? "active" : "")}>
        <Link className="nav-link text-white p-2" to={to} {...props}>
            {children}
        </Link>
    </li>
  )
}


export default Navbar;

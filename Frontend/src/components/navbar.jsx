import { Link } from "react-router-dom";
import "../CSS/navbar.css"
function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/Mainpage">Thotbox</Link>
            </div>
            <div className="navbar-links">
                <Link to="/Profile">Profile</Link>
                <Link to="/">signout</Link>
            </div>
        </nav>
    )

}
export default NavBar
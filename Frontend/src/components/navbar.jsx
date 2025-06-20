import { Link } from "react-router-dom";
import "../CSS/navbar.css"
function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/Home">Thotbox</Link>
                <img src="/src/assets/thotboxicon.png" className="appicon"></img>
            </div>
            <div className="navbar-links">
                <Link to="/Home">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/">signout</Link>
            </div>
        </nav>
    )

}
export default NavBar
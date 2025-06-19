import { Link } from "react-router-dom";
import "../CSS/signup.css";
function Signup (){
    return(
        <div className="jj">
            <center>
                <h1 className="header1">Signup</h1>
                <h3>Username:</h3>
                <input type="Text"></input>
                <h3>Password:</h3>
                <input></input><br></br>
                <h3>confirmPassword:</h3>
                <input></input><br></br> 
                <Link class="cl" to='/'>Save</Link>
            </center>
        </div>

    )
}
export default Signup
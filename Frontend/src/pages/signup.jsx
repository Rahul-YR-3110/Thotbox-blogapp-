import { Link } from "react-router-dom"
import "../CSS/signup.css"
function Signup (){
    return(
        <div className="signup-container">
            <center>
                <h1 className="header">Signup</h1>
                <h3>Username:</h3>
                <input type="Text"></input>
                <h3>Password:</h3>
                <input></input><br></br>
                <h3>Confirm Password:</h3>
                <input></input><br></br> 
                <button className="submit-links"><Link to='/'>Submit</Link></button>
                <Link to='/'>back</Link>
                
            </center>
        </div>

    )
}
export default Signup
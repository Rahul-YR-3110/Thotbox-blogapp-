import { Link } from 'react-router-dom';
import "../CSS/signin.css";
function Signin(){
    return(
        <div class="ck">
        <div className="kk">
            <center>
                <h1 className="header">Signin</h1>
                <h3>Username:</h3>
                <input type="Text"></input>
                <h3>Password:</h3>
                <input></input><br></br>
                <Link class="cs" to="/MainPage">Submit</Link>
                <p class="pc"><b>Wanna create new account</b>
                  <Link class="lc" to='/signup'> Signup</Link>
                </p>
            </center>
        </div>
        </div>
    )
}
export default Signin
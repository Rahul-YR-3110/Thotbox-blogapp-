import "../CSS/signin.css"
import { Link } from 'react-router-dom';
function Signin(){
    return(
        <>
        <div className="kk">
            <center>
                <h1 className="header">Signin</h1>
                <h3>Username:</h3>
                <input type="Text"></input>
                <h3>Password:</h3>
                <input></input><br></br>
                <button>Submit</button>
                <p>wanna create an account 
                  <Link to='/signup'>signup</Link>
                </p>
            </center>
        </div>
        
        
        </>
    )
}
export default Signin
import { Link } from "react-router-dom"
function Signup (){
    return(
        <div className="jj">
            <center>
                <h1 className="header">Signup</h1>
                <h3>Username:</h3>
                <input type="Text"></input>
                <h3>Password:</h3>
                <input></input><br></br>
                <h3>confirmPassword:</h3>
                <input></input><br></br>
                <button>Submit</button> 
                <Link to='/'>back</Link>
            </center>
        </div>

    )
}
export default Signup
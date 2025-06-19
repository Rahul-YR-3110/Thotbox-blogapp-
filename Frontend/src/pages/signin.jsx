import { Link } from 'react-router-dom';
import '../CSS/Signin.css';

function Signin() {
    return (
        <>
            <div className="signin-container">
                <h1>Signin</h1>
                <h3>Username:</h3>
                <input type="text" />
                <h3>Password:</h3>
                <input type="password" /><br />
                <center>
                    <Link to="/Home" className="submit-link">Submit</Link>
                </center>
                
                <p>
                    Don't have an account <Link to='/signup' className='signup-link'>Signup</Link>
                </p>
            </div>
        </>
    );
}

export default Signin;

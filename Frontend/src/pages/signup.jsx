import { Link,useNavigate} from "react-router-dom"
import {useState} from 'react'
import "../CSS/signup.css"
function Signup (){
    
    const [username,setUsername]=useState("")
    const [errorMsg,setErrorMsg]=useState("")
    const navigate=useNavigate()
    const [password,setpassword]=useState("")
    const [confPassword,setconfPassword]=useState("")
    const handleSignup=async(e)=> {
        e.preventDefault();
        if(password!==confPassword) {
            setErrorMsg("Passwords not matched")
        } else {
            try {
                const res = await fetch('http://localhost:3000/auth/signup', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
                });

            const data = await res.json();

            if (res.ok) {
            navigate('/'); 
            } else {
                setErrorMsg(data.message || 'Signup failed');
            } 
            } catch (err) {
                console.error('Signup error:', err);
                setErrorMsg('Something went wrong. Try again.');
            }
        }
    }
    return(
        <div className="signup-container">
            <center>
                <form onSubmit={handleSignup}>
                <h1 className="header">Signup</h1>
                <h3>Username:</h3>
                <input type="Text" value={username} onChange={e=>setUsername(e.target.value)}></input>
                <h3>Password:</h3>
                <input type="text" value={password} onChange={e=>setpassword(e.target.value)}></input><br></br>
                <h3>Confirm Password:</h3>
                <input value={confPassword} onChange={e=>setconfPassword(e.target.value)}></input><br></br> 
                <button type="Submit" className="submit-links">Submit</button>
                <Link to='/'>back</Link> 
                </form>
                <p>{errorMsg}</p>
            </center>
        </div>

    )
}
export default Signup
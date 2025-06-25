import { Link,useNavigate } from 'react-router-dom';
import '../CSS/Signin.css';
import { useState } from 'react';
function Signin() {
    const [username,setUsername]=useState("")
    const [errorMsg,setErrorMsg]=useState("")
    const navigate=useNavigate()
    const [password,setpassword]=useState("")
    const handleSignin = async (e) => {
    e.preventDefault(); 

    try {
      const res = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password })
      });

      const data = await res.json();

      if (res.ok) {
        
        localStorage.setItem('token', data.token);
        navigate('/Home'); 
      } else {
        setErrorMsg(data.message || 'Signin failed');
      }
    } catch (err) {
      console.error('Signin error:', err);
      setErrorMsg('Something went wrong. Try again.');
    }
  };
    return (
        <>
            <center>
                <div className='icondiv'>
                    <h1 className='thotboxspell'>THOTBOX</h1> <img src="/src/assets/thotboxicon.png" />
            </div>
            </center>
            
            <div >
                
                <form onSubmit={handleSignin} className="signin-container">
                <h1>Signin</h1>
                <h3>Username:</h3>
                <input type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
                <h3>Password:</h3>
                <input type="password" value={password} onChange={e=>setpassword(e.target.value)}/><br />
                <center>
                   <button type="Submit" className="submit-link">Submit</button>
                </center>
                 <p>{errorMsg}</p>
                <p>
                    Don't have an account <Link to='/signup' className='signup-link'>Signup</Link>
                </p>
                </form>
               
            </div>
        </>
    );
}

export default Signin;
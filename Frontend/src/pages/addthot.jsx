import "../CSS/addthot.css"
import NavBar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Addthot(){
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [errMsg,seterrMsg]=useState("")
    const handleaddThot=async(e)=> {
        const token=localStorage.getItem("token")
        e.preventDefault(); 
        try {
            const res = await fetch('http://localhost:3000/thots/addthot', {
            method: 'POST',
            headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
            },
        body: JSON.stringify({ title,description })
      });
      const data = await res.json();

      if (res.ok) {
        navigate('/Home'); 
      } else {
        seterrMsg(data.message || 'Error Creating thot');
      }
    } catch (err) {
      console.error('error creating thot:', err);
      seterrMsg('Something went wrong. Try again.');
    }
    }
    return(
        <>
        <NavBar></NavBar>
        <div >
            <form onSubmit={handleaddThot} className="addthotcontainer">
            <h2>Title of your thot</h2>
            <input className="titleinput" value={title} onChange={e=>setTitle(e.target.value)}></input>
            <h2>Describe your thot</h2>
            <textarea className="describeinput" value={description} onChange={e=>setDescription(e.target.value)} ></textarea>
            <button type="Submit" className="submit-button">Submit</button>
             <p>{errMsg}</p>
            </form>
        </div>
        </>
    )
}
export default Addthot;

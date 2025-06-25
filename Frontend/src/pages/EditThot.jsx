import NavBar from "../components/navbar";
import { useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";
function EditThot(){
     const location = useLocation();
  const { thot } = location.state || {};
  const navigate = useNavigate();

    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [errMsg,seterrMsg]=useState("")

    const handleEditThot=async(id,e)=> {
        const token=localStorage.getItem("token")
        e.preventDefault(); 
        if(title.trim()==="" || description.trim()==="") {
              seterrMsg("Please Enter title and Description")
        }
        else {
        try {
            const res = await fetch(`http://localhost:3000/thots/Home/Profile/update/${id}`, {
            method: 'PATCH',
            headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
            },
        body: JSON.stringify({ title,description })
      });
      const data = await res.json();

      if (res.ok) {
        navigate('/Profile'); 
      } else {
        seterrMsg(data.message || 'Error Editing thot');
      }
    } catch (err) {
      console.error('error Editing thot:', err);
      seterrMsg('Something went wrong. Try again.');
    }
    }
  }
    return(
        <>
        <NavBar></NavBar>
        <div >
            <form className="addthotcontainer" onSubmit={(e) => handleEditThot(thot._id, e)}>
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
export default EditThot;

import { useState} from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
function Comment(){
    const { id } = useParams();
    const [comment,setComment]=useState("")
    const [errMsg,setErrmsg]=useState("")
    const navigate=useNavigate()
    const handleSubmit=async(e)=> {
          const token=localStorage.getItem("token")
        e.preventDefault(); 
        try {
            const res = await fetch(`http://localhost:3000/thots/Home/${id}`, {
            method: 'PATCH',
            headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
            },
        body: JSON.stringify({ comment }) // just the string
      });
      const data = await res.json();
      console.log("data:",data)
      if (res.ok) {
        navigate("/Home"); 
      } else {
        setErrmsg(data.message || 'Error Commenting on thot');
      }
    } catch (err) {
      console.error('Error Commenting on thot:', err);
      setErrmsg('Something went wrong. Try again.');
    }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input placeholder="Add a Comment..." value={comment} onChange={(e)=>{setComment(e.target.value)}}></input>
        <button type="Submit">Add</button>
        <p>{errMsg}</p>
        </form>
        </>
    )
}
export default Comment
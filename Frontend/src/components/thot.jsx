
import "../CSS/thot.css"
import { useNavigate } from "react-router-dom";
import {useState} from "react";
function Thot({thot}){
    const word=thot.description.split(" ")
    const wordcount=word.length
    let readingtime=0;

    if(wordcount>0 && wordcount<=100) {
        readingtime=1
    }
    else if(wordcount>100 && wordcount<=200) {
         readingtime=2
    }
    else if(wordcount>200 && wordcount<=300) {
         readingtime=3
    }
    else if(wordcount>300 && wordcount<=400) {
         readingtime=4
    }
    else if(wordcount>400 && wordcount<=500) {
         readingtime=5
    }
    else {
        readingtime=10
    }
    const createdAt=new Date(thot.createdAt)
    const date = createdAt.toLocaleDateString();
    const time = createdAt.toLocaleTimeString();

    const [errMsg,setErrmsg]=useState("")
    const [likecount,setlikecount]=useState(null)
    const navigate = useNavigate();
    const handleClick = () => {
    navigate(`/thot/${thot._id}`, { state: { thot } });
    };
    const liked=async(e)=> {
          const token=localStorage.getItem("token")
        e.preventDefault(); 
        try {
            const res = await fetch(`http://localhost:3000/thots/Home/Like/${thot._id}`, {
            method: 'PATCH',
            headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
            },
      });
      const data = await res.json();
      setlikecount(data.likesCount)
      if (res.ok) {
        navigate("/Home"); 
      } else {
        setErrmsg(data.message || 'Error Liking on thot');
      }
    } catch (err) {
      console.error('Error Liking on thot:', err);
      setErrmsg('Something went wrong. Try again.');
    }
    }
    return(
        <>
        <div className="thot"  style={{ cursor: "pointer" }}>
            <div style={{ display: 'flex', width: '750px',justifyContent: 'space-between', alignItems: 'center'}}>
            <h2>@{thot.username}</h2>
            <h5>reading time: {readingtime}min</h5>
            </div>
            <h3>{thot.title}</h3>
            <p>{thot.description}</p>
            <div className="buttons"><button onClick={liked}>like</button><p>{likecount}</p> <button onClick={handleClick}>comment</button> <p>{thot.commentcount}</p></div>
            <h5 style={{marginTop:"5px"}}>{date} {time}</h5>
         <p>{errMsg}</p>
        </div>
       
        </>
    )
}

export default Thot
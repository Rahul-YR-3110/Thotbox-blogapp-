
import "../CSS/thot.css"
import { useNavigate } from "react-router-dom";
function liked(){
    alert("you liked")
}
function Thot({thot}){
    const navigate = useNavigate();
    const handleClick = () => {
    navigate(`/thot/${thot.id}`, { state: { thot } });
  };
    return(
        <>
        <div className="thot" onClick={handleClick} style={{ cursor: "pointer" }}>
            <h2>@{thot.username}</h2>
            <h3>{thot.title}</h3>
            <p>{thot.description}</p>
            <div className="buttons"><button onClick={liked}>like</button><p>{thot.likecount}</p> <button onClick={handleClick}>comment</button> <p>{thot.commentcount}</p></div>
        </div>
        </>
    )
}

export default Thot
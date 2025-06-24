import { useNavigate } from "react-router-dom";
function MyThot({thot}){
    const navigate = useNavigate();
    const handleDelete=()=> {
        navigate("/DeleteThot",{state:{thot}})
    }
   const handleEdit=() => {
        navigate("/EditThot",{state:{thot}})
   }
    return(
        <>
        <div className="thot" style={{ cursor: "pointer" }}>
            <h2>@{thot.username}</h2>
            <h3>{thot.title}</h3>
            <p>{thot.description}</p>
            <div className="buttons"><button onClick={handleEdit}>Edit</button><p>{thot.likecount}</p> <button onClick={handleDelete}>Delete</button> <p>{thot.commentcount}</p></div>
        </div>
        </>
    )
}

export default MyThot
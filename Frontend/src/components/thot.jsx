import Comment from "./comment"
import "../CSS/thot.css"

function liked(){
    alert("you liked")
}
function Thot({thot}){
    return(
        <>
        <h2>@{thot.Username}</h2>
        <div className="onethot">
            <h3>{thot.title}</h3>
            <p>{thot.description}</p>
            <div className="buttons"><button onClick={liked}>like</button><p>{thot.likecount}</p> <button onClick={Comment}>comment</button> <p>{thot.commentcount}</p></div>
        </div>
        </>
    )
}

export default Thot
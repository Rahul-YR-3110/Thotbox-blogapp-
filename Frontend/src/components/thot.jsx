import Comment from "./comment"
import "../CSS/thot.css"

function liked(){
    alert("you liked")
}
function Thot({thot}){
    return(
        <>
        <div className="thot">
            <h2>@{thot.Username}</h2>
            <h3>{thot.title}</h3>
            <p>{thot.description}</p>
            <div className="button-overlay">
                <div className="buttons"><button onClick={liked}>like</button><p>{thot.likecount}</p> <button onClick={Comment}>comment</button> <p>{thot.commentcount}</p></div>
            </div>
        </div>
        </>
    )
}

export default Thot
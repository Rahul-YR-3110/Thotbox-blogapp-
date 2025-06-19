import Comment from "./comment"
import "../CSS/thot.css"

function liked(){
    alert("you liked")
}
function Thot({thot}){
    return(
        <>
        <div className="thot">
            <h3>@{thot.Username}</h3>
            <h2>{thot.title}</h2>
            <p>{thot.description}</p>
            <br></br>
            <div className="button-overlay">
                <div className="buttons"><button class="like1" onClick={liked}>like</button><p class="p1">{thot.likecount}</p> <button class="comment1" onClick={Comment}>comment</button> <p class="p2">{thot.commentcount}</p></div>
            </div>
        </div>
        </>
    )
}

export default Thot
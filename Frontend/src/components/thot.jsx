
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
            <div className="buttons"><button onClick={liked}>like</button><p>{thot.likecount}</p> <button>comment</button> <p>{thot.commentcount}</p></div>
        </div>
        </>
    )
}

export default Thot
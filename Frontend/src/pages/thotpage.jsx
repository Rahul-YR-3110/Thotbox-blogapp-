import { useLocation, useParams } from "react-router-dom";
import Comment from "../components/comment"
import NavBar from "../components/navbar";
import "../CSS/thotpage.css";
function ThotPage() {
  const { id } = useParams();
  const location = useLocation();
  const { thot } = location.state || {};

  if (!thot) return <p>Thot not found.</p>; // fallback if no state

  return (
    <>
        <NavBar/>
        <div className="thot-page">
            <h2>@{thot.username}</h2>
            <h3>{thot.title}</h3>
            <p>{thot.description}</p>
        <div className="likescomments">
            <p>{thot.likecount}❤️</p>
            <p>{thot.commentcount}💬</p>
        </div>
        
          <div>
            <h3>Comments:</h3>
        {thot && thot.comments && thot.comments.length > 0 ? (
              <div className="comments-section">
                {thot.comments.map((commentObj, index) => (
            <p key={index}>{commentObj.comment}</p>
        ))}   </div>
        ) : (
              <p>No comments yet.</p>
          )}
          </div>
                <Comment/>
        </div>
      
    </>
    
  );
}

export default ThotPage;
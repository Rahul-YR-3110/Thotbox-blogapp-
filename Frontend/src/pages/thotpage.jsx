import { useLocation, useParams } from "react-router-dom";
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
            <h2>@{thot.Username}</h2>
            <h3>{thot.title}</h3>
            <p>{thot.description}</p>
        <div className="likescomments">
            <p>{thot.likecount}❤️</p>
            <p>{thot.commentcount}💬</p>
        </div>
        
        <div>
                <h3>Comments:</h3>
                {thot.comments ? (
                <div className="comments-section">
                    {Object.entries(thot.comments).map(([key, comment]) => (
                        <p key={key}>"{comment}"</p>
                    ))}
                </div>
                ) : (
                <p>No comments yet.</p>
                )}
            </div>
            <input placeholder="Add a comment"></input>
            <button className="comment-click">click to add the comment</button>
            
        </div>
      
    </>
    
  );
}

export default ThotPage;
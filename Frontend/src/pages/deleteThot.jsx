import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../CSS/delete.css"
function DeleteThot() {
  const location = useLocation();
  const { thot } = location.state || {};
  const navigate = useNavigate();

  const handleno = () => {
    navigate("/Profile");
  };

  const handleyes = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:3000/thots/Home/Profile/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/Profile");
      } else {
        alert(data.message || "Failed to delete thot");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="deletepage">
    <center>
      <h2>Do You Want to Delete This Thot?</h2><br></br>
      <div style={{ justifyContent: 'center'}}>
      
      <button style={{  justifyContent: 'center' ,marginLeft:"-5px",padding:"15px",paddingLeft:"20px",paddingRight:"20px"}} onClick={() => handleyes(thot._id)}>Confirm</button>
      <button style={{  justifyContent: 'center',marginLeft:"65px",padding:"15px",paddingLeft:"20px",paddingRight:"20px"}} onClick={handleno}>Cancel</button>
      </div>
      </center>
    </div>
  );
}

export default DeleteThot;
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    <>
      <h1>Do You Want to Delete This Thot?</h1>
      <button onClick={() => handleyes(thot._id)}>Yes</button>
      <button onClick={handleno}>No</button>
    </>
  );
}

export default DeleteThot;
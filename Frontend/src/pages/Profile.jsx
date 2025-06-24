import NavBar from "../components/navbar.jsx";
import { useState ,useEffect} from "react";
import MyThot from "../components/MyThot.jsx";
function Profile() {
const [thots, setThots] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  
  useEffect(() => {
  const token = localStorage.getItem("token");
  const fetchThots = async () => {
    try {
      const res = await fetch("http://localhost:3000/thots/Home/Profile", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      console.log("data:",data)
      if (res.ok) {
        setThots(data.thots);
      } else {
        setErrMsg(data.message || "Failed to fetch thots.");
      }
    } catch (error) {
      console.error("Error fetching thots:", error);
      setErrMsg("Something went wrong. Try again.");
    }
  };
  fetchThots();
}, []);

    return (
        <>
            <NavBar></NavBar>
            <div>
               <h1>My Profile</h1> 
                <h2>My Thots</h2>
                 {thots.map((thot)=> (
                    <MyThot thot={thot}>

                    </MyThot>

                 ))}   
            </div>
        </>
    )
}
export default Profile;
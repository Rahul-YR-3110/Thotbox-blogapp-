import Thot from "../components/thot.jsx";
import "../CSS/mainpage.css";
import NavBar from "../components/navbar.jsx";
import { useState, useEffect } from "react";
import SearchBar from "../components/searchbar.jsx";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [thots, setThots] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [searchthots,setsearchthots]=useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
  const token = localStorage.getItem("token");
  const fetchThots = async () => {
    try {
      const res = await fetch("http://localhost:3000/thots/Home", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      if (res.ok) {
        setThots(data.thots);
        setsearchthots(data.thots);
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

 
  const handleAddThot = () => {
    navigate("/addthot");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if(search.trim()===""){
      setsearchThots(thots)
    }
    else{
      const filtered=thots.filter((thot) =>
        thot.title.toLowerCase().includes(search.toLowerCase()))
        setsearchthots(filtered);
    }
  };

  return (
    <>
      <NavBar />
      <div className="Home">
        <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
        <center>
          <button className="addbutton" onClick={handleAddThot}>
            <p className="addicon">+</p>
            Add your thot
          </button>
        </center>

        <div className="thot-list">
          {searchthots.length > 0 ? (
            searchthots.map((thot) => (
              <Thot key={thot._id} thot={thot} />
            ))
          ) : (
            <p>No thots found matching your search.</p>
          )}
        <p>{errMsg}</p>
        </div>
      </div>
    </>
  );
}

export default MainPage;
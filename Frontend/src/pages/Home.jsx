import Thot from "../components/thot.jsx";
import "../CSS/mainpage.css"
import NavBar from '../components/navbar.jsx'
import { useState } from "react";
import SearchBar from "../components/searchbar.jsx";
import { useNavigate } from "react-router-dom";
function MainPage(){
    const navigate = useNavigate();
    const handleaddthot = () => {
    navigate(`/addthot`);
  };
    const Thots = [
  { id: 1, Username: "Rahul", title: "My Life sucks", description: "Australia lost the WTC final...", likecount: 40, commentcount: 50,comments:{1:"this is painful",2:"i am also sad",3:"this is gross"} },
  { id: 2, Username: "Rahul", title: "Madrid lost", description: "Madrid lost the UCL quarter final", likecount: 40, commentcount: 50 },
  { id: 3, Username: "Manideep", title: "I am a good boy", description: "I am a good boy", likecount: 40, commentcount: 50 },
  { id: 4, Username: "Manideep", title: "Still good", description: "Still a good boy", likecount: 40, commentcount: 50 },
];


    const handleSearch=(e)=>{
        e.preventDefault()
        alert(search)
    }
    const[search,setSearch]=useState("")
    return (
        <>
        <NavBar />
        <div className="Home">
                <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
                <center>
                   <button className="addbutton" onClick={handleaddthot}>
                        <p className="addicon">+</p>
                        Add your thot
                        </button>
                </center>
                
            
            <div>
                {Thots.map((thots)=>(
                <Thot thot={thots}></Thot>))}
            </div>
        </div>        
        </>
    )
}
export default MainPage
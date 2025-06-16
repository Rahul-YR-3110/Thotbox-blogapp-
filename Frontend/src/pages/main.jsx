import Thot from "../components/thot";
import "../CSS/mainpage.css"
import NavBar from '../components/navbar.jsx'
import { useState } from "react";
function MainPage(){
    const Thots=[{Username:"Rahul",title:"My Life sucks",description:"Australia lost the WTC final",likecount:40,commentcount:50},
                {Username:"Rahul",title:"My Life sucks",description:"Madrid lost the UCL quater final",likecount:40,commentcount:50},
                {Username:"Manideep",title:"I am a good boy", description:"I am a good boy",likecount:40,commentcount:50}]

    const handleSearch=(e)=>{
        e.preventDefault()
        alert(search)
    }
    const[search,setSearch]=useState("")
    return (
        <>
        <NavBar />
        <div className="Home">
            <form onSubmit={handleSearch} className="Search-form">
                <input type="text" placeholder="search for Thots" className="search-input" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <button type="submit" className="search-button">search</button>
            </form>
            <div>
                {Thots.map((thots)=>(
                <Thot thot={thots}></Thot>))}
            </div>
        </div>        
        </>
    )
}
export default MainPage
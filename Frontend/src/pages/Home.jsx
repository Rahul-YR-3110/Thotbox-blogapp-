import Thot from "../components/thot.jsx";
import "../CSS/mainpage.css"
import NavBar from '../components/navbar.jsx'
import { useState } from "react";
import SearchBar from "../components/searchbar.jsx";
function MainPage(){
    const Thots=[{Username:"Rahul",title:"My Life sucks",description:"Australia lost the WTC final and i am willing to secide as it is my best practice to do and madrid also lost its UCL ",likecount:40,commentcount:50},
                {Username:"Rahul",title:"My Life sucks",description:"Madrid lost the UCL quater final",likecount:40,commentcount:50},
                {Username:"Manideep",title:"I am a good boy", description:"I am a good boy",likecount:40,commentcount:50},
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
            <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
            <div>
                {Thots.map((thots)=>(
                <Thot thot={thots}></Thot>))}
            </div>
        </div>        
        </>
    )
}
export default MainPage
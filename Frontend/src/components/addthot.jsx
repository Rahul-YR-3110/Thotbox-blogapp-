import "../CSS/addthot.css"
import NavBar from "./navbar";
function Addthot(){
    return(
        <>
        <NavBar></NavBar>
        <div className="addthotcontainer">
            <h2>Title of your thot</h2>
            <input className="titleinput"></input>
            <h2>Describe your thot</h2>
            <textarea className="describeinput"></textarea>
            <button className="submit-button">submit</button>
        </div>
        </>
    )
}
export default Addthot;
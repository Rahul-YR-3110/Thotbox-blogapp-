import Thot from "../components/thot";
function MainPage(){
    const Thot1={Username:"Rahul",title:"My Life sucks",description:"Australia lost the WTC final",likecount:40,commentcount:50}
    const Thot2={Username:"Rahul",title:"My Life sucks",description:"Madrid lost the UCL quater final",likecount:40,commentcount:50}
    return (
        <>
        <Thot thot={Thot1}></Thot>
        <Thot thot={Thot2}></Thot>
        </>
    )
}
export default MainPage
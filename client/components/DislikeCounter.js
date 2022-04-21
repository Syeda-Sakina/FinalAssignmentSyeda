import dislike from "./images/dislike.png";
import {useState} from "react";

function Dislike_Counter(){
    let [Dislike_count, setDislike_Count] = useState(0);
   
     function Click_Dislike() {
        
        setDislike_Count(Dislike_count + 1);
    } 
    return(
        <div >
            
             <img onClick={Click_Dislike} class="likeStyle" src={dislike} />
            <p class="likeStyle">{Dislike_count}</p> 
        </div>
    );
}


export default Dislike_Counter;

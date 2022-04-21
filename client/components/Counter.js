import like from "./images/heart.png";

import {useState} from "react";

function LikeCounter(){
    let [Likecount, setLikeCount] = useState(0);
    function ClickLike(){
        //console.log("Clicked");
        setLikeCount(Likecount + 1);
    }

    return(
        <div  >
            <img onClick={ClickLike} class="likeStyle" src={like} />
            <p class="likeStyle">{Likecount}</p>
           
        </div>
    );
}


export default LikeCounter;

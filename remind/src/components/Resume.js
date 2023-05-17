import React, { useState } from "react";

function Resume(props){
    const [like,setLike] = useState("Like");

    function clickLike(){
        if(like){
            setLike();
        }
        else{
            setLike("Like");
        }
    }
    return(
        <div>
            <span><button onClick={clickLike}>like</button> {like}</span>
        </div>
    )
}

export default Resume;
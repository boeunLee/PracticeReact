import React from "react";
import '../App.css';

// function ColorText(props){
//     return(
//         <>
//         <h1 className={props.color}>색이 바뀌어요</h1>
//         </>
//     )
// }

// export default ColorText;

//중괄호로 감싸서 가져오면 객체의 key에 해당하는 "value"만 보내준다
//따라서 {color}는 red, green, blue
export default function ColorText({ color }) {
    return <p style={{ color: color }}>hello</p>
}
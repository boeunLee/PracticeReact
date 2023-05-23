import React, { useState } from "react";
import Detail from "./stylePractice/detail";
import Question from "./stylePractice/question";
import Review from "./stylePractice/review";

function ContentsContainer(props){
  if(props.title==="detail"){
    return <Detail/>;
  }
  else if(props.title==="qa"){
    return <Question/>;
  }
  else if(props.title==="review"){
    return <Review/>;
  }
}

function NavBar(){
  const [current, setCurrent] = useState("detail");

  const checkId = (e) => {
    // 클릭한 id를 의미
    setCurrent(e.target.id);
  }

  return(
    <>
    <ul>
      <li id="detail" onClick={checkId} style = {current==="detail"?{color:"red"}:{color:"black"}}>상세정보</li>
      <li id="qa" onClick={checkId} style = {current==="qa"?{color:"red"}:{color:"black"}}>Q&A</li>
      <li id="review" onClick={checkId} style = {current==="review"?{color:"red"}:{color:"black"}}>Review</li>
    </ul>
    <ContentsContainer title={current}/>
    </>
  )
}

export default NavBar;
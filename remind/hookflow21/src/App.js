import React, { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const onClick = () => {
    setNum(num + 1);
  };
  
  useLayoutEffect(() => { 
    console.log("⏱마운트 될때 브라우저에 그려주기 전에 딱 한번실행!");
    return ()=>{
      console.log("🧹⏱언마운트될때 단 한번 실행됩니다!")
    }
  }, []); 

	useLayoutEffect(() => {
    console.log("⏱마운트/업데이트 될때마다 브라우저에 그려주기 전에 실행!");
    return ()=>{
      console.log("🧹⏱업데이트가 될때, 언마운트될때 실행됩니다!")
    }
  }); 

  useLayoutEffect(() => {
    console.log("⏱마운트 될때, num state변경으로 인해 업데이트 될때 브라우저에 그려주기 전에 실행!");
    return ()=>{
      console.log("🧹⏱업데이트가 될때, 언마운트될때 실행됩니다!")
    }
  }, [num]);

  //useLayoutEffect가 모두 끝난 후에야 브라우저에 그려주기 시작합니다.

  useEffect(() => {
    console.log("🎈마운트 될때 브라우저에 그려진 후 딱 한번실행!");
    return ()=>{
      console.log("🧹🎈언마운트될때 단 한번 실행됩니다!")
    }
  }, []); 

	useEffect(() => {
    console.log("🎈마운트/업데이트 될때마다 브라우저에 그려진 후 실행!");
    return ()=>{
      console.log("🧹🎈업데이트가 될때, 언마운트될때 실행됩니다!")
    }
  }); 

  useEffect(() => {
    console.log("🎈마운트 될 때, num state변경으로 인해 업데이트 될때 브라우저에 그려진 후 실행!");
    return ()=>{
      console.log("🧹🎈업데이트가 될때, 언마운트될때 실행됩니다!")
    }
  }, [num]);

  /**
   * <숫자 버튼을 누르면>
   * 1.“딱 한번 실행” 로그가 사라진 것을 볼 수 있음
   * 2. layoutEffect와 Effect가 진행되기 전에 클린업이 동작하는 것을 확인할 수 있음
   */
  return (
      <button onClick={onClick}>{num}</button>
  );
}
const Wrap = ()=>{
  const [isVisible,setIsVisible] = useState(true)
  const handleClick = ()=> setIsVisible(!isVisible)
  return (
    <>
      <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
      <br></br>
      {isVisible&& <App />}
    </>
  )
}

export default Wrap
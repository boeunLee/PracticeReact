import React,{useEffect, useState} from 'react';

function getName(){
  console.log("오래기다리는중..");
  return "gary";
}

function App() {
  /** 
   * <동작과정>
   * 1. useState()에 인수로 getName 함수를 값으로 넘겨준다
   * 2. useState(getName)이 진행되면 최초초기화 진행과정에서 getName을 실행
   * 3. 이후 업데이트(리렌더링 과정)에서 초기화가 진행되지 않음 - getName을 실행하는 부분이 생략된다.
   */
  const [name, setName] = useState(getName);
  const [num, setNum] = useState(0);
  return (
    <>
      <div>안녕하세요 {name}, 현재 숫자는 {num} 입니다</div>
      <button onClick={()=>setNum(num+1)}>누르면 숫자가 올라갑니다 {num}</button>
    </>
  );
}
export default App;

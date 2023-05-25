import React, { useRef, useState } from "react";

const App = () => {
  const emailInput = useRef(null); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef

  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값

  const inputCheck = (e) => {
    // 폼전달 방지
    e.preventDefault();

    // 이메일이 입력되지 않았을 때
    // useRef.current.value : input 태그들의 값을 가져오기
    if (emailInput.current.value === "") {
      alert("이메일을 입력해주세요");
      // useRef.current.event : useRef가 가리키는 태그에 이벤트 주기
      emailInput.current.focus();
      return; // if, else 문에 들어오게 되면 setState 실행없이 바로 return
    } 
    // 비밀번호가 입력되지 않았을 때
    else if (pwInput.current.value === "") {
      alert("비밀번호를 입력해주세요");
      pwInput.current.focus();
      return;
    }
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        회원가입
      </button>
      <span>{emailValue}</span>
      <span>{pwValue}</span>
    </form>
  );
};

export default App;
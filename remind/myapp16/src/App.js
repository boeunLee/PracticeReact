import React, { useRef, useState, useMemo } from 'react'

export default function App() {
  const inputName = useRef(null)
  const inputId = useRef(null)
  const [userInfo, setUserInfo] = useState([])
  const [name, setName] = useState('')
  const [id, setId] = useState('')

  // 모든 렌더링에 함께 렌더링되는 이슈가 있습니다.
  function getNum(li){
    console.log('렌더링!')
    return li.length
  }

  // const n = useMemo(() => getNum(userInfo), [userInfo]);
  // userInfo의 값이 바뀔 때만 getNum()할수가 실행되도록
  const n = useMemo(()=>{
    return getNum(userInfo);
  },[userInfo]);

  function handleInputName(e){
    console.log(e)
    setName(e.target.value)
    console.log('렌더링 - 1')
  }

  function handleInputId(e){
    console.log(e)
    setId(e.target.value)
    console.log('렌더링 - 2')
  }

  function handleSubmit(e){
    e.preventDefault()
    // newInfo에 내가 입력한 이름, 아이디 저장
    const newInfo = [...userInfo, {name, id}]
    // 입력한 이름, 아이디 초기화
    inputName.current.value = ''
    inputId.current.value = ''
    inputName.current.focus() //회원명부작성을 누른 뒤에 이름입력칸에 포커스된다.
    setUserInfo(newInfo)
    console.log('렌더링 - 3')
  }

  return (
    <>
      <form>
        <input 
          type='text'
          placeholder='이름을 입력하세요'
          onChange={handleInputName}
          ref={inputName}
        />
        <input 
          type='text'
          placeholder='아이디를 입력하세요'
          onChange={handleInputId}
          ref={inputId}
        />
        <button type='submit' onClick={handleSubmit}>회원 명부 작성</button>
      </form>
      <ul>
        {
          userInfo.map((value, index) => (
            <li key={index}>
              <h3>이름 : {value.name}</h3>
              <strong>아이디 : {value.id}</strong>
            </li>
          ))
        }
      </ul>
      {/* getNum(userInfo)대신 useMemo값을 넣어서 최적화 */}
      <span>현재 회원 수 : {n}</span>
    </>
  )
}
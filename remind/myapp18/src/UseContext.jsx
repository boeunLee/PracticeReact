//my-context17을 useContext를 이용해 수정
//기존 코드는 ContextConsumer.jsx
import { useContext, createContext } from "react";

const UserInfo = createContext({name:"gary", id:"garyId"})

function App() {

  function HelloLicat(){
    // 위에서 createContext로 name, id를 만들었으니 const {name,id}로 해야함
    const {name,id} = useContext(UserInfo);
    return(
      <div>
        <h2>hello, {name}</h2>
        <strong>id is {id}</strong>
        <HelloLicatTwo />
      </div>
    )
  }

  function HelloLicatTwo(){
    const {name,id} = useContext(UserInfo);
    return(
      <div>
        <h2>name Two: {name}</h2>
        <strong>id Two: {id}</strong>
      </div>
    )
  }

  return (
    <HelloLicat />
  );
}
export default App;

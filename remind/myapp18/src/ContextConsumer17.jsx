import React,{createContext} from 'react'

function App() {

  const UserInfo = createContext({name:"gary", id:"garyId"});

  function HelloLicat(){
    return(
      <UserInfo.Consumer>
        {(e) => (
          <div>
            <h2>hello, {e.name}</h2>
            <strong>id is {e.id}</strong>
            <HelloLicatTwo />
          </div>
        )}
      </UserInfo.Consumer>
    )
  }

  function HelloLicatTwo(){
    return(
      <UserInfo.Consumer>
        {(el)=>(
          <div>
            <h2>Two name: {el.name}</h2>
            <strong>Two id: {el.id}</strong>
          </div>
        )}
      </UserInfo.Consumer>
    )
  }

  return (
    <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
      <HelloLicat />
    </UserInfo.Provider>
  )
}

export default App
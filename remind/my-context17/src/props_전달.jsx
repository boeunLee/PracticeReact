function App() {

    function HelloLicat({value:{name,id}}){
      console.log();
      return(
        <div>
          <h2>hello, {name}</h2>
          <strong>id is {id}</strong>
          <HelloLicatTwo value={{name,id}} />
          {/* <h2>hello, {props.value.name}</h2>
          <strong>id is {props.value.id}</strong> */}
          {/* <HelloLicatTwo value = {{props.value.name, props.value.id}}/> */}
        </div>
      )
    }
  
    function HelloLicatTwo({value:{name,id}}){
      return(
        <div>
          <h2>Two name: {name}</h2>
          <strong>Two id: {id}</strong>
        </div>
      )
    }
    return (
      <div>
        <HelloLicat value={{name:"gary", id:"garyId"}} />
      </div>
    );
  }
  export default App;
  
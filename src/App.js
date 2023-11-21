import React, { useRef } from "react";
function App() {
  const data = useRef();
   const submitHandler=(e)=>{
    e.preventDefault()
    const SendData=data.current.value;
    console.log(SendData)
    fetch('http://144.24.91.223:5010'
  ).then(res=>res.json()).then(Newdata=>{
    console.log(Newdata)
  })
  }
  return (
  
    <>
      <form onSubmit={submitHandler} style={{display:'flex', justifyContent:'center',alignItems:'center',height:'500px',fontSize:'1.5rem'}}>
      <label htmlFor='search'>SEARCH</label>
      <input type='text' ref={data}/>
      <button type='sumbit'>버튼</button>
      </form>
    </>
  );
}

export default App;

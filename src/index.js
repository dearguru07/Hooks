import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Hooks = () => {
  let [a,seta]=useState(0)
  let [b,setb]=useState(10)
  function click(){
    setb(22)
    console.log(b)
  }
  return (
    <div>
      <h1>Hello world.....</h1>
      <h2>{a}</h2>
      <button onClick={()=>{
       const High=a+1
       seta(High)
       
      }}>Press</button>
      <button onClick={()=>{
        const Low=a-1
        seta(Low)
      }}>Low</button>
      <h1>{b}</h1>
      <button onClick={click}>click here</button>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hooks />);

import React, { useEffect, useState } from "react";

const EffectHook = () => {
  const [a, seta] = useState("apple mobile");
  const [value, setvalue] = useState(0);

//   console.log('ot is top code')
 useEffect(()=>{
    async function API(){
        const data=await fetch("https://type.fit/api/quotes")
        const OrigialData=await data.json()
        console.log(OrigialData)
      }
    API()
 },[])

//  console.log('ot is bottom code')

  return (
    <div>
        <h2>useEffect Hook</h2>
      <input placeholder="" value={a} onChange={(x)=>{
        seta(x.target.value)
      }}></input>
      <h3>{value}</h3>
      <button onClick={()=>{
            setvalue(value+1)
      }}>Increse</button>
    </div>
  );
};
export default EffectHook;

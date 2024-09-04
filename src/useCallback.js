import React, { useState } from "react";

const CallBack=()=>{
    const [one,setOne]=useState(0)
    const [two,setTwo]=useState(0)
    const [three,setThree]=useState(0)
    const first=()=>{
        setOne(one+1)
    }
    const second=()=>{
        setTwo(two+1)
    }
    const thrid=()=>{
        setThree(three+1)
    }
    return <div>
        <h2>useCallback Hoook</h2>
        <h1>{one}</h1>
        <h1>{two}</h1>
        <h1>{three}</h1>
        <button onClick={first}>Increase-1</button>
        <button onClick={second}>Increase-2</button>
        <button onClick={thrid}>Increase-3</button>
    </div>
}
export default CallBack;


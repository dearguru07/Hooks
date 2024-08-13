import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// ------------------This Page for useState Hooks------------

const Hooks = () => {
  let [a, seta] = useState(0);
  let [b, setb] = useState(10);

  // varible state-------------------

  function click() {
    setb(22);
    console.log(b);
  }
  // returnstate----------------------
  return (
    <div>
      {/* ----------------method-1---------------------------- */}

      <h1>useState Hook</h1>
      <h2>{a}</h2>
      <button onClick={() => {
          const High = a + 1;
          seta(High);
        }}>Hiigh</button>

      {/* ---------------method-2-----------------    */}

      <button onClick={() => {
          const Low = a-1;
          seta(Low);
        }}>Low</button>
      
      {/*------------------ method-3-------------------------------- */}

      <h1>{b}</h1>
      <button onClick={click}>Click here</button>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hooks />);

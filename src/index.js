import ReactDOM from "react-dom/client";
import EffectHook from "./useEffect";
import CallBack from "./useCallback";


const Hooks = () => {
return <div>
  {/* <StateHook/> */}
  {/* <EffectHook/> */}
  <CallBack/>
</div>
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hooks />);

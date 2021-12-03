import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }

  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  if (action.type === "INCR2") {
    state = state * 2;
  }
  if (action.type === "RESET") {
    state = 0;
  }
  return state;
};

const UseReducer = () => {
  // const initialData = 15;
  //   const [myNum, setMyNum] = React.useState(0);
  const intialData = 10;
  const [state, dispatch] = useReducer(reducer, intialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
        <div class="button2" onClick={() => dispatch({ type: "INCR2" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Multiply
        </div>
        <div class="button2" onClick={() => dispatch({ type: "RESET" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Reset
        </div>
      </div>
    </>
  );
};

export default UseReducer;

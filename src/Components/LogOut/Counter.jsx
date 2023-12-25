import React, { useReducer } from "react";
const init = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return init;
    default:
      return state;
  }
};
const Counter = () => {
  const [count, dispatch] = useReducer(reducer, init);
  return (
    <div>
      <h2 className="h2-counter">{count}</h2>
      <button
        className="btnCountBody btn-margin"
        onClick={() => {
          dispatch("increment");
        }}
      >
        افزایش
      </button>
      <button
        className="btnCountBody btn-margin"
        onClick={() => {
          dispatch("decrement");
        }}
      >
        کاهش
      </button>
      <button
        className="btnCountBody btn-margin"
        onClick={() => {
          dispatch("reset");
        }}
      >
        ریست
      </button>
    </div>
  );
};
export default Counter;

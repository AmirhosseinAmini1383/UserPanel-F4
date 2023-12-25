import React, { useReducer } from "react";
const init = {
  value1: 0,
  value2: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, value1: state.value1 + action.val };
    case "decrement1":
      return { ...state, value1: state.value1 - action.val };
    case "increment5":
      return { ...state, value2: state.value2 + action.val };
    case "decrement5":
      return { ...state, value2: state.value2 - action.val };
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
      <h2 className="h2-counter">{count.value1}</h2>
      <button
        className="btnCountBody btn-margin"
        onClick={() => {
          dispatch({ type: "increment1", val: 1 });
        }}
      >
        +1 افزایش
      </button>
      <button
        className="btnCountBody btn-margin"
        onClick={() => {
          dispatch({ type: "decrement1", val: 1 });
        }}
      >
        -1 کاهش
      </button>
      <h2 className="h2-counter">{count.value2}</h2>
      <button
        className="btnCountBody btn-margin"
        onClick={() => {
          dispatch({ type: "increment5", val: 5 });
        }}
      >
        +5 افزایش
      </button>
      <button
        className="btnCountBody btn-margin"
        onClick={() => {
          dispatch({ type: "decrement5", val: 5 });
        }}
      >
        -5 کاهش
      </button>
      <button
        className="btnCountBody btn-margin"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        ریست
      </button>
    </div>
  );
};
export default Counter;

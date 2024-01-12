import React from "react";
import useTitle from "../../Hooks/useTitle";
import Countericon from "../../css/Icons/counter.png";
import useCounter from "../../Hooks/useCounter";
const Counter = () => {
  useTitle("Counter");
  const [count1, increment1, decrement1, reset1] = useCounter(2, 2);
  const [count2, increment2, decrement2, reset2] = useCounter(5, 5);
  return (
    <div>
      <div className="manage counter">
        <img className="manage-icon" src={Countericon} alt="gallery" />
        <p>Counter</p>
      </div>
      <div className="bg-title">
        <h3 className="title-h3">افزایش و کاهش 2 عددی</h3>
        <h3 className="title-h3">{count1}</h3>
        <button className="btnCountBody " onClick={increment1}>
          افزایش
        </button>
        <button className="btnCountBody " onClick={decrement1}>
          کاهش
        </button>
        <button className="btnCountBody " onClick={reset1}>
          ریست
        </button>
      </div>
      <div className="bg-title">
        <h3 className="title-h3">افزایش و کاهش 5 عددی</h3>
        <h3 className="title-h3">{count2}</h3>
        <button className="btnCountBody " onClick={increment2}>
          افزایش
        </button>
        <button className="btnCountBody " onClick={decrement2}>
          کاهش
        </button>
        <button className="btnCountBody " onClick={reset2}>
          ریست
        </button>
      </div>
    </div>
  );
};

export default Counter;

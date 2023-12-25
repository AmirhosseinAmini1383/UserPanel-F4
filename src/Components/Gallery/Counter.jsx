import React, { useState } from "react";

const Counter = () => {
  const [Count, setCount] = useState(0);
  const handleIncreaseCount = (num) => {
    for (let index = 0; index < num; index++) {
      console.log(Count);
      setCount((PrevCount) => {
        return PrevCount + 1;
      });
    }
  };
  return (
    <div>
      <button
        className="btnCountBody"
        onClick={() => {
          handleIncreaseCount(5);
        }}
      >
        +5 = {Count}
      </button>
    </div>
  );
};

export default Counter;

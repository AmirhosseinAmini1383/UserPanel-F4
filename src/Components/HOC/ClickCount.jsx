import React from "react";
import Counter from "./Counter";
const ClickCount = (props) => {
  const { office, Count, handleIncreaseCount } = props;
  return (
    <div>
      <button className="btnCountBody" onClick={handleIncreaseCount}>
        React : {office}
        Count Click : {Count}
      </button>
    </div>
  );
};
export default Counter(ClickCount);

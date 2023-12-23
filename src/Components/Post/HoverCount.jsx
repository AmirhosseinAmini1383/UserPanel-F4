import React from "react";
import Counter from "./Counter";
const HoverCount = (props) => {
  const { office, Count, handleIncreaseCount } = props;
  return (
    <div>
      <button className="btnCountBody" onMouseEnter={handleIncreaseCount}>
        React : {office}
        Hover Click : {Count}
      </button>
    </div>
  );
};
export default Counter(HoverCount);

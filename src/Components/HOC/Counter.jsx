import React, { useState } from "react";
const Counter = (MainComponent) => {
  const NewComponent = () => {
    const [Count, setCount] = useState(0);
    const handleIncreaseCount = () => {
      setCount(Count + 1);
    };
    return (
      <MainComponent
        office="CodeYad | "
        Count={Count}
        handleIncreaseCount={handleIncreaseCount}
      />
    );
  };
  return NewComponent;
};
export default Counter;

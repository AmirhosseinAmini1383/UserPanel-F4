import React, { useMemo, useState } from "react";

const CounterIndex = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(10);

  const incrementOne = () => {
    setCount(count + 1);
  };

  const incrementTwo = () => {
    setCountTwo(countTwo + 10);
  };

  const isEven = useMemo(() => {
    console.log(count);
    let i = 0;
    while (i < 3000) {
      console.log(i);
      i++;
    }
    return count % 2 === 0;
  }, [count]);

  return (
    <div>
      <h1>useMemo</h1>
      <h5 className="title-h3">{isEven ? "زوج" : "فرد"}</h5>
      <button className="btnCountBody" onClick={incrementOne}>
        {`count-one : ${count}`}
      </button>
      <br />
      <button className="btnCountBody" onClick={incrementTwo}>
        count-two : {countTwo}
      </button>
    </div>
  );
};

export default CounterIndex;

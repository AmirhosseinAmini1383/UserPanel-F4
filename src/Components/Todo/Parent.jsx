import React, { useCallback, useState } from "react";
import Title from "./Title";
import Countbox from "./Countbox";
import Countbutton from "./Countbutton";

const Parent = () => {
  const [title, setTitle] = useState("useCallback {ادامه بده...}");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(5);
  const handleSetFirstCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleSetSecondCount = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);
  return (
    <div>
      <Title title={title} />
      <Countbox title="مجموعه1" count={count} />
      <Countbutton title="مجموعه1" handleClick={handleSetFirstCount} />
      <Countbox title="مجموعه2" count={count2} />
      <Countbutton title="مجموعه2" handleClick={handleSetSecondCount} />
    </div>
  );
};

export default Parent;

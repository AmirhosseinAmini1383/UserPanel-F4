import React, { memo } from "react";

const Countbox = (props) => {
  console.log("نمایش " + props.title);
  return (
    <div className="title-spn">
      <span>{props.title + " : " + props.count}</span>
    </div>
  );
};

export default memo(Countbox);

import React, { memo } from "react";

const Title = (props) => {
  console.log("title");
  return <h3 className="title-h3">{props.title}</h3>;
};

export default memo(Title);

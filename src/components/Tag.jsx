import React from "react";

import "./Tag.css";

const Tag = (props) => {
  // prop is an object with custom attribute name specified in taskForm.jsx
  console.log(props);
  return <button className="tag">{props.tagName}</button>;
};

export default Tag;

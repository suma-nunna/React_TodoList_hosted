import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  // onClick - in taskForm when we are using onClick prop
  // prop is an object with custom attribute name specified in taskForm.jsx
  // console.log(tagName, selectTag, selected);

  const tagStyles = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    Javascript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      className="tag"
      // onClick={() => onClick()}
      style={selected ? tagStyles[tagName] : tagStyles.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;

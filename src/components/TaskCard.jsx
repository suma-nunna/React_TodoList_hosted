import React from "react";

import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDeleteTask, index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bt_line">
        <div className="task_card_tags">
          {/* <Tag tagName="HTML" />
          <Tag tagName="CSS" /> */}
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
            // selected={true} or selected , if it always true we can use both syntax
            // key is not a prop, it is react attribute to give unique id to common HTML elements
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDeleteTask(index)}>
          <img src={deleteIcon} alt="" className="delete_Icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;

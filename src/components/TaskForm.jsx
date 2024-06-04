import React from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_title"
          placeholder="Enter your task...."
        />

        <div className="task_form_category">
          <div>

            {/* we are going to use this button for cards as well , so we are placing these in common component and use it in multiple places */}
            {/* <button className="tag">HTML</button> */}
            {/* tagName is the custom attribute to specify the value and pass the value to Tag.jsx react component to access dynamic value and child component */}
            {/* for tagName attribute we can pass anytype of data like array , object or functions */}
            <Tag tagName="HTML"/>

            {/* Remove below button , instead we are using Tag component same as above code (common component for button ) */}
            {/* <button className="tag">CSS</button>
            <button className="tag">Javascript</button>
            <button className="tag">React</button> */}
            <Tag tagName="CSS" />
            <Tag tagName="Javascript" />
            <Tag tagName="React" />


            <select name="" id="" className="task_status">
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;

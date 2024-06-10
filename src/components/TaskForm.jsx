import React, { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  // indivally handling input forms
  // const [task, settask] = useState('');
  // const [status, setstatus] = useState('todo')
  // const handleTaskChange = (e) => {
  //   settask(e.target.value)
  // };
  // const handleStatusChange = (e) => {
  //   setstatus(e.target.value)
  // };
  // console.log(task,status);

  const [taskData, settaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    // console.log(taskData.tags.some(item => item === tag))
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    console.log(tag);
    if (taskData.tags.some((item) => item === tag)) {
      const filterTag = taskData.tags.filter((ele) => ele !== tag);
      settaskData((prev) => {
        return { ...prev, tags: filterTag };
      });
    } else {
      settaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  // console.log(taskData.tags)

  const handleFomChanges = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;

    // updating the object
    settaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // after submit the page will get refresh bcz this funtion is calling in form tag , to prevent the refresh we are using dis line
    console.log(taskData);

    setTasks((prev) => {
      return [...prev, taskData];
    });

    settaskData({
      task: "",
      status: "todo",
      tags: [],
    })
  };

  // console.log(taskData);

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          // name attribute will bind with state object while we are using common onchange method for forms
          value={taskData.task} 
          // value attribute - bind the value from logic to html and html to logic , here we are using it for reset the form after submit
          className="task_title"
          placeholder="Enter your task...."
          onChange={handleFomChanges}

          // below code for indivially calling chnages for forms
          // onChange={(e) => settask(e.target.value)}
          // onChange={(e) => handleTaskChange(e)}
        />

        <div className="task_form_category">
          <div>
            {/* we are going to use this button for cards as well , so we are placing these in common component and use it in multiple places */}
            {/* <button className="tag">HTML</button> */}
            {/* tagName is the custom attribute to specify the value and pass the value to Tag.jsx react component to access dynamic value and child component */}
            {/* for tagName attribute we can pass anytype of data like array , object or functions */}
            <Tag
              tagName="HTML"
              selectTag={selectTag} // sending selectTag function reference not calling it 
              selected={checkTag("HTML")} // calling the function checkTag , in checkTag we are retturing true or false , sending the boolen value to tag component to set the style

              // onClick={() => selectTag("HTML")} // onclick also acts like a prop not eventhandler for react component
            />

            {/* Remove below button , instead we are using Tag component same as above code (common component for button ) */}
            {/* <button className="tag">CSS</button>
            <button className="tag">Javascript</button>
            <button className="tag">React</button> */}
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="Javascript"
              selectTag={selectTag}
              selected={checkTag("Javascript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />

            <select
              name="status"
              // name attribute will bind with state object while we are using common onchange method for forms
              value={taskData.status} 
              // bind the value from logic to html and html to logic , here we are using it for reset the form after submit
              id=""
              className="task_status"
              onChange={handleFomChanges}

              // below code for indivially calling chnages for forms
              // onChange={handleStatusChange}
            >
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

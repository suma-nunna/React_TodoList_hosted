import React from "react";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ taskTitle, taskIcon, tasks, status, handleDeleteTask }) => {
  //   console.log(props);
  // let { taskTitle, taskIcon, tasks, status } = props;
  // console.log(taskTitle);
  // we can use above variables or can use directly props in HTML like {props.taskTitle} {props.taskIcon}

  return (
    <section className="task_col">
      <h3 className="task_col_header">
        <img src={taskIcon} alt="" className="task_col_Icon" />
        {taskTitle}
      </h3>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard key={index} title={task.task} tags={task.tags} handleDeleteTask={handleDeleteTask} index={index} />
            // key is not a prop, it is react attribute to give unique id to common HTML elements
          )
      )}
      {/* <TaskCard /> */}
    </section>
  );
};

export default TaskColumn;

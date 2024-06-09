import React from "react";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ taskTitle, taskIcon, tasks, status }) => {
  //   console.log(props);
  // let { taskTitle, taskIcon, tasks, status } = props;
  // console.log(taskTitle);
  // we can use above variablöes or can use directly props in HTML like {props.taskTitle} {props.taskIcon}

  return (
    <section className="task_col">
      <h3 className="task_col_header">
        <img src={taskIcon} alt="" className="task_col_Icon" />
        {taskTitle}
      </h3>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard key={index} title={task.task} tags={task.tags} />
          )
      )}
      {/* <TaskCard /> */}
    </section>
  );
};

export default TaskColumn;

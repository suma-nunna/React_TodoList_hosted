import React, { useState } from "react";

const Basics = () => {
  //   let tasks = 0;

  //   const countArr = useState(0);
  //   const count = countArr[0];
  //   const setCount = countArr[1];
  //   console.log(countArr);
  const [count, setCount] = useState(0); //0 : intial value to count variable
  const [input, setInput] = useState("");

  const tasks = ["Task1", "Task2", "Task3"];

  const disableBtn = false;
  const headingStyles = {
    background: "red",
    color: "white",
    // fontSize: "30px"
  };
  const countTask = () => {
    return count > 0 ? `Tasks: ${count}` : "No tasks available";
  };

  const handleClick = () => {
    // tasks++;
    setCount(count + 1);
    console.log("Clicked on add task!", count);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  return (
    // <React.Fragment>
    <>
      <h1 style={headingStyles}>Create Todo here</h1>
      {/* inline style syntax 1*/}

      {/* <h2>
        Tasks: {tasks}
      </h2> */}

      <h3 style={{ fontSize: "15px", color: "Red" }}>{countTask()}</h3>
      {/* inline style syntax 2*/}

      {/* <h3>Test: {parseInt(9.3)}</h3> */}

      <button
        className="btn"
        disabled={disableBtn}
        value="Add Task Button"
        onClick={handleClick}
      >
        Add Task
      </button>

      <br />
      <input type="text" onChange={handleChange} />

      <h3>User Input : {input}</h3>

      {/* Display List items using JS map */}
      <ul>
        {
          // key is to identify html elements , it is unique value
          tasks.map((task) => (<li key={task}>{task}</li>))
        }
      </ul>

      <ol>
        {
          // key is to identify html elements , it is unique value
          tasks.map((task) => (<li key={task}>{task}</li>))
        }
      </ol>

      
    </>
    // </React.Fragment>
  );
};

export default Basics;

// we use only one parent element with n number of child elements
// that parent may be div or any html tag or else you can use
// <React.Fragment></React.Fragment> or <> >/> both works same
{
  /* <div>
      <h1>Create Todo here</h1>
      <button>Add Task</button>
    </div> */
}

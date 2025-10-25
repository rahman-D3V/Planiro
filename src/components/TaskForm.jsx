import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [Priority, setPriority] = useState("Medium");
  const [taskType, setTaskType] = useState("General");

  function handleSubmit(e) {
    e.preventDefault();
    addTask({ Task: task, Priority, Task_Type: taskType, completed: false });

    setTask("");
    setPriority("Medium");
    setTaskType("General");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => console.log(task, Priority, taskType)}>
          ADD
        </button>
      </div>

      <div id="btns">
        <select
          name=""
          id=""
          onChange={(e) => setPriority(e.target.value)}
          value={Priority}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          name=""
          id=""
          onChange={(e) => setTaskType(e.target.value)}
          value={taskType}
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </form>
  );
};

export default TaskForm;

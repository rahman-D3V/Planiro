import React from "react";

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  if (!tasks.length) return <p>No tasks yet. Add one above!</p>;

  return (
    <ul>
      {tasks.map(({ Task, Priority, taskType, completed }, index) => (
        <li key={index}>
          <div className={`task-info ${completed ? "completed" : ""}`}>
            <h2>{Task}</h2>
            <p>
              ({Priority}, {taskType})
            </p>
          </div>

          <div>
            <button onClick={() => toggleComplete(index)}>
              {completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

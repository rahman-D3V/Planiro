import React from "react";

const ProgressTracker = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progressWidth = totalTasks
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  return (
    <div>
      <p>
        {completedTasks} of {totalTasks} tasks completed
      </p>
      <div
        style={{ background: "#e0e0e0", height: "10px", borderRadius: "5px" }}
      >
        <div
          style={{
            width: `${progressWidth}%`,
            background: "#4caf50",
            height: "100%",
            borderRadius: "5px",
            transition: "width 0.3s ease",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressTracker;

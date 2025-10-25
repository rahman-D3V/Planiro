import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import ProgressTracker from "./components/ProgressTracker";

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(obj) {
    setTasks((prev) => [...prev, obj]);
  }

  console.log(tasks);

  return (
    <>
      <div>
        <h1>Planiro</h1>
        <p>Less chaos. More control.</p>
      </div>

      <TaskForm addTask={addTask} />

      <TaskList />

      <ProgressTracker />
    </>
  );
}

export default App;

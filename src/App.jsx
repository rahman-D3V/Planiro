import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import ProgressTracker from "./components/ProgressTracker";

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState(() => {
    // load initial tasks from localStorage (if any)
    const raw = localStorage.getItem("Tasks");
    return raw ? JSON.parse(raw) : [];
  });

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(obj) {
    setTasks(prev => [...prev, obj]);
  }

  function deleteTask(indx) {
    setTasks(prev => prev.filter((_, i) => i !== indx));
  }

  // toggle completion for task at `index`
  function toggleComplete(index) {
    setTasks(prev =>
      prev.map((eachTask, i) =>
        i === index ? { ...eachTask, completed: !eachTask.completed } : eachTask
      )
    );
  }

  return (
    <>
      <div>
        <h1>Planiro</h1>
        <p>Less chaos. More control.</p>
      </div>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />

      <ProgressTracker tasks={tasks} />

      {/* Clear all tasks btn */}
      {
        tasks.length > 0 && <button onClick={() => setTasks([])}>Clear All Tasks</button>
      }
    </>
  );
}

export default App;

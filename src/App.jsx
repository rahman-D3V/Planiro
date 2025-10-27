import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import ProgressTracker from "./components/ProgressTracker";

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState(() => {
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

  function toggleComplete(index) {
    setTasks(prev =>
      prev.map((eachTask, i) =>
        i === index ? { ...eachTask, completed: !eachTask.completed } : eachTask
      )
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Planiro
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            Less chaos. More control.
          </p>
        </div>

        {/* Task Form Card */}
        <div className="mb-8">
          <TaskForm addTask={addTask} />
        </div>

        {/* Progress Tracker */}
        <div className="mb-8">
          <ProgressTracker tasks={tasks} />
        </div>

        {/* Task List */}
        <div className="mb-8">
          <TaskList
            tasks={tasks}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </div>

        {/* Clear All Button */}
        {tasks.length > 0 && (
          <div className="flex justify-center">
            <button 
              onClick={() => setTasks([])}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Clear All Tasks
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

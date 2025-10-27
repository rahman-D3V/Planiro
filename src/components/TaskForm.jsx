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
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Task Input */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 text-slate-800 placeholder-slate-400 font-medium"
            required
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            ADD
          </button>
        </div>

        {/* Priority & Type Selectors */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Priority
            </label>
            <select
              onChange={(e) => setPriority(e.target.value)}
              value={Priority}
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 text-slate-800 font-medium cursor-pointer"
            >
              <option value="High">🔴 High</option>
              <option value="Medium">🟡 Medium</option>
              <option value="Low">🟢 Low</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Category
            </label>
            <select
              onChange={(e) => setTaskType(e.target.value)}
              value={taskType}
              className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 text-slate-800 font-medium cursor-pointer"
            >
              <option value="General">📋 General</option>
              <option value="Work">💼 Work</option>
              <option value="Personal">👤 Personal</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;

import React from "react";

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  if (!tasks.length) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-slate-200">
        <div className="text-6xl mb-4">📝</div>
        <p className="text-xl text-slate-500 font-medium">
          No tasks yet. Add one above!
        </p>
      </div>
    );
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Work":
        return "💼";
      case "Personal":
        return "👤";
      default:
        return "📋";
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map(({ Task, Priority, Task_Type, completed }, index) => (
        <div
          key={index}
          className={`bg-white rounded-xl shadow-lg border-2 p-6 transition-all duration-300 hover:shadow-xl ${
            completed 
              ? "border-slate-200 bg-slate-50" 
              : "border-slate-200 hover:border-indigo-300"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Task Info */}
            <div className="flex items-center gap-4 flex-1">
              <button
                onClick={() => toggleComplete(index)}
                className={`flex-shrink-0 w-7 h-7 rounded-full border-3 transition-all duration-200 ${
                  completed
                    ? "bg-indigo-600 border-indigo-600"
                    : "border-slate-300 hover:border-indigo-500"
                } flex items-center justify-center`}
              >
                {completed && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </button>

              <div className="flex-1">
                <h2
                  className={`text-lg font-semibold mb-2 ${
                    completed
                      ? "line-through text-slate-400"
                      : "text-slate-800"
                  }`}
                >
                  {Task}
                </h2>
                <div className="flex gap-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold border ${getPriorityColor(
                      Priority
                    )}`}
                  >
                    {Priority}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold bg-indigo-100 text-indigo-700 border border-indigo-200">
                    {getTypeIcon(Task_Type)} {Task_Type}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => toggleComplete(index)}
                className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                  completed
                    ? "bg-slate-200 hover:bg-slate-300 text-slate-700"
                    : "bg-indigo-100 hover:bg-indigo-200 text-indigo-700"
                }`}
              >
                {completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="px-5 py-2.5 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-semibold transition-all duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

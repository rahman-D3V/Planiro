import React from "react";

const ProgressTracker = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progressWidth = totalTasks
    ? Math.round((completedTasks / totalTasks) * 100)
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
      {/* Header with Stats */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800">Progress Tracker</h3>
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {completedTasks}/{totalTasks}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-4 bg-slate-200 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full transition-all duration-500 ease-out shadow-lg"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>

      {/* Progress Text */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-slate-600 font-medium">
          {progressWidth === 100 && totalTasks > 0
            ? "🎉 All tasks completed! Great job!"
            : progressWidth === 0
            ? "Start checking off tasks to see your progress"
            : `Keep going! You're ${progressWidth}% there`}
        </p>
        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          {progressWidth}%
        </span>
      </div>
    </div>
  );
};

export default ProgressTracker;

import React from 'react';
import TaskManager from '../components/TaskManager';

const TasksPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Task Manager
      </h1>
      <TaskManager />
    </div>
  );
};

export default TasksPage;
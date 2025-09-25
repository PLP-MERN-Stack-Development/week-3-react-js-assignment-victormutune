import React, { useState, useEffect } from 'react';
import useLocalStorage from '../utils/useLocalStorage';
import Button from './ui/Button';
import Card from './ui/Card';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: newTaskText.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  return (
    <Card title="Task Manager" className="max-w-2xl mx-auto">
      <form onSubmit={addTask} className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <Button type="submit" className="rounded-l-none">
            Add Task
          </Button>
        </div>
      </form>

      <div className="flex space-x-2 mb-4">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 text-center py-4">
            No tasks found
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-3 border rounded-md dark:border-gray-700"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                />
                <span
                  className={`ml-3 ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}
                >
                  {task.text}
                </span>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>
    </Card>
  );
};

export default TaskManager;
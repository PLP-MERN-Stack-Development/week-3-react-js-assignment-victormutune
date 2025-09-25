import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Task Manager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A React application built with JSX and Tailwind CSS
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Manage Your Tasks">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Add, complete, and delete tasks with our intuitive task manager.
          </p>
          <Link to="/tasks">
            <Button>Go to Tasks</Button>
          </Link>
        </Card>

        <Card title="API Integration">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            View data fetched from JSONPlaceholder API with search and pagination.
          </p>
          <Link to="/api-data">
            <Button>View API Data</Button>
          </Link>
        </Card>
      </div>

      <div className="mt-10">
        <Card title="Project Features">
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Component architecture with reusable UI components</li>
            <li>State management using React hooks (useState, useEffect, useContext)</li>
            <li>Custom hooks for local storage persistence</li>
            <li>API integration with loading and error states</li>
            <li>Responsive design with Tailwind CSS</li>
            <li>Dark mode support</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 dark:text-gray-400">
              &copy; {currentYear} Task Manager App. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Home
            </Link>
            <Link to="/tasks" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Tasks
            </Link>
            <Link to="/api-data" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              API Data
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
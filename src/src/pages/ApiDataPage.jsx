import React from 'react';
import ApiData from '../components/ApiData';

const ApiDataPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        API Data
      </h1>
      <ApiData />
    </div>
  );
};

export default ApiDataPage;
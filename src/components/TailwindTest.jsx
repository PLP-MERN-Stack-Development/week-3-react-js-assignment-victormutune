import React from 'react';
import '../test.css';

const TailwindTest = () => {
  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mt-4 border-2 border-blue-500">
        <div className="shrink-0">
          <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">T</div>
        </div>
        <div>
          <div className="text-xl font-medium text-black">Tailwind Test</div>
          <p className="text-gray-500">If you can see this styled card, Tailwind CSS is working!</p>
        </div>
      </div>
      <div className="test-box">
        <h2>Regular CSS Test</h2>
        <p>If this box has a red background with blue border, regular CSS is working!</p>
      </div>
    </>
  );
};

export default TailwindTest;
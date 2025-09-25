import React from 'react';

const Card = ({ 
  children, 
  title, 
  className = '',
  headerClassName = '',
  bodyClassName = '',
  ...props 
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`} {...props}>
      {title && (
        <div className={`px-4 py-3 border-b border-gray-200 dark:border-gray-700 ${headerClassName}`}>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
        </div>
      )}
      <div className={`p-4 ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
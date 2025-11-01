import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-teal-600 rounded-full animate-spin animation-delay-150"></div>
        </div>
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
          VSR
        </div>
        <div className="text-gray-600 dark:text-gray-400 animate-pulse">
          Loading Portfolio...
        </div>
      </div>
    </div>
  );
};

export default Preloader;
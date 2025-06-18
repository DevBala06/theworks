import React from 'react';

const LinePattern = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-2">
        <div className="w-8 h-1 bg-gray-300"></div>
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default LinePattern;
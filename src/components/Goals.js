// src/components/Goals.js
import React from 'react';

function Goals() {
  return (
    <div className="goals w-1/2 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Goals</h3>
      <div className="goal-item">
        <p>ABS & Stretch</p>
        <p className="text-gray-600 text-sm">30 min/day</p>
      </div>
      {/* Add other goals here */}
    </div>
  );
}

export default Goals;

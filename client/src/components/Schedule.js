// src/components/Schedule.js
import React from 'react';

function Schedule() {
  return (
    <div className="schedule w-1/2 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">My Schedule</h3>
      <div className="schedule-item">
        <p>Monday - Stretch - 20 Sets</p>
        <p className="text-gray-600 text-sm">08:00 AM</p>
      </div>
      {/* Add other schedule items here */}
    </div>
  );
}

export default Schedule;
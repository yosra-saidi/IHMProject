
import React from 'react';

function ActivityCard({ title, value, color }) {
  return (
    <div className={`activity-card p-4 rounded-lg text-white ${color}`}>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  );
}

export default ActivityCard;
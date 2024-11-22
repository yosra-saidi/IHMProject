import React from "react";

const DashboardContent = () => {
  return (
    <div className="p-8">
      <h3 className="text-xl font-bold mb-4">Profile Statistics</h3>

      {/* Statistics Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card title="Profile Views" value="112.000" />
        <Card title="Followers" value="183.000" />
        <Card title="Following" value="80.000" />
        <Card title="Saved Posts" value="112" />
      </div>

      {/* Graph */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h4 className="font-bold mb-4">Profile Visit</h4>
        <div className="h-32 bg-gray-200"></div>
      </div>

      {/* Other Info */}
      <div className="grid grid-cols-3 gap-4">
        <Card title="Europe" value="862" />
        <Card title="Latest Comments" value="Congratulations on your graduation!" />
        <Card title="Visitors Profile" value="30% Europe, 20% Asia" />
      </div>
    </div>
  );
};

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-gray-600">{value}</p>
    </div>
  );
};

export default DashboardContent;

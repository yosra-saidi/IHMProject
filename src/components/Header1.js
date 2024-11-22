import React from "react";

const Header = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">Good Morning, Admin Sir 🙏</h2>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-lg px-4 py-2 text-gray-600"
        />
        <div className="text-gray-500">🔔</div>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Header;

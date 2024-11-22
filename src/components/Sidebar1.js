import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md h-screen p-4">
      <div className="text-xl font-bold mb-8 text-purple-600 flex items-center">
        <span className="mr-2">WeCare</span>
        <span className="text-sm">🤝</span>
      </div>
      <ul className="space-y-6">
        <li className="font-semibold text-gray-700">Dashboard</li>
        <li className="text-gray-600">Personal Dashboard</li>
        <li className="pl-4 text-sm text-gray-500">
          - Achievements<br />
          - Events<br />
          - Contacts<br />
          - Inbox<br />
          - Calendar
        </li>
        <li className="text-gray-600">User Management</li>
        <li className="pl-4 text-sm text-gray-500">
          - Users<br />
          - Departments<br />
          - Roles & Permissions
        </li>
        <li className="text-gray-600">Page Management</li>
        <li className="pl-4 text-sm text-gray-500">
          - Services<br />
          - Contact<br />
          - About us<br />
          - Careers
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

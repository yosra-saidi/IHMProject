// src/components/Header.js
import React from 'react';
import { FaSearch, FaBell, FaCog, FaUser } from 'react-icons/fa'; // Added FaUser icon
import { MdFitnessCenter } from 'react-icons/md';

function Header() {
  return (
    <header className="header flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo Section */}
      {/* Welcome and Search Section */}
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-600">
          <p>Good Morning</p>
          <h2 className="font-semibold">Welcome Back!</h2>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center">
          <FaSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none"
          />
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        {/* <FaUser className="text-gray-500" title="Connected User" /> */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg"
          alt="Tunisian Flag"
          className="w-8 h-8 rounded-full"
          title="Tunisia"
        />
        <FaBell className="text-gray-500" title="Notifications" />
        <FaCog className="text-gray-500" title="Settings" />
        <img
          src="/assets/profile.jpg" // Adjust this path to your project structure
          alt="User Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}

export default Header;
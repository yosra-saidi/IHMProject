import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaDumbbell, FaAppleAlt, FaCalendarAlt, FaChartLine, FaSignOutAlt, FaRegQuestionCircle } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar bg-white w-64 h-screen p-6 shadow-lg flex flex-col justify-between">
      <div>
        {/* Logo et texte WeCare avec couleur bleue */}
        <div className="logo flex items-center text-2xl font-bold mb-10">
          <span className="text-blue-500">WeCare</span>
          <img 
            src="/assets/logo.png" 
            alt="WeCare Logo" 
            className="w-8 h-8 ml-2" 
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4">
          <NavLink to="/dashboard" className="flex items-center p-2 text-gray-700 hover:text-blue-500">
            <FaChartLine className="inline-block mr-2" /> Overview
          </NavLink>
          <NavLink to="/workout" className="flex items-center p-2 text-gray-700 hover:text-blue-500">
            <FaDumbbell className="inline-block mr-2" /> Workout
          </NavLink>
          <NavLink to="/DietPlan" className="flex items-center p-2 text-gray-700 hover:text-blue-500">
            <FaAppleAlt className="inline-block mr-2" /> Diet Plan
          </NavLink>
          <NavLink to="/goals" className="flex items-center p-2 text-gray-700 hover:text-blue-500">
            <FaCalendarAlt className="inline-block mr-2" /> Goals
          </NavLink>
          <NavLink to="/schedule" className="flex items-center p-2 text-gray-700 hover:text-blue-500">
            <FaCalendarAlt className="inline-block mr-2" /> My Schedule
          </NavLink>
          <NavLink to="/progress" className="flex items-center p-2 text-gray-700 hover:text-blue-500">
            <FaChartLine className="inline-block mr-2" /> Progress
          </NavLink>
        </nav>
      </div>

      {/* Section Aide et Déconnexion */}
      <div>
        <button className="flex items-center p-2 text-gray-700 hover:text-blue-500">
          <FaRegQuestionCircle className="inline-block mr-2" /> Help
        </button>
        <button className="flex items-center p-2 text-gray-700 hover:text-blue-500">
          <FaSignOutAlt className="inline-block mr-2" /> Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
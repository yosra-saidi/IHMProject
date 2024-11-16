import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainDashboard from './components/MainDashboard';
import Workout from './components/Workout';
import DietPlan from './components/DietPlan';  // Import the new DietPlan component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Login and Register Routes */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Routes with Sidebar and Header */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Header />
                  <MainDashboard />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Overview Route */}
        <Route
          path="/overview"
          element={
            isAuthenticated ? (
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Header />
                  <MainDashboard />
                </div>
              </div>
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />

        {/* Workout Route */}
        <Route
          path="/workout"
          element={
            isAuthenticated ? (
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Header />
                  <Workout />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Diet Plan Route */}
        <Route
          path="/dietplan"
          element={
            isAuthenticated ? (
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Header />
                  <DietPlan />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        
      </Routes>
    </Router>
  );
}

export default App;




//src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import MainDashboard from './components/MainDashboard';
// import Workout from './components/Workout';

// function App() {
//   return (
//     <Router>
//       <div className="app flex h-screen overflow-hidden">
//         <Sidebar />
//         <div className="content flex flex-col w-full">
//           <Header />
//           <Routes>
//             <Route path="/" element={<MainDashboard />} />
//             <Route path="/workout" element={<Workout />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

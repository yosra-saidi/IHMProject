import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainDashboard from './components/MainDashboard';
import Workout from './components/Workout';
import DietPlan from './components/DietPlan';  // Import the new DietPlan
import MyAccount from './components/MyAccount';
import Recipes from './components/Recipes';
import ContactPage from './components/ContactPage';
import Help from './components/Help';


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
        <Route
          path="/contactpage"
          element={
            isAuthenticated ? (
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Header />
                  <ContactPage />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
  path="/recipes"
  element={
    isAuthenticated ? (
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Recipes />
        </div>
      </div>
    ) : (
      <Navigate to="/login" />
    )
  }
/>
<Route
  path="/help"
  element={
    isAuthenticated ? (
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Help />
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
        {/* My Account Route */}
<Route
  path="/myaccount"
  element={
    isAuthenticated ? (
      <div className="flex">
        <Sidebar /> {/* Affiche la barre latérale si nécessaire */}
        <div className="flex-1">
          <Header />
          <MyAccount /> {/* Affiche le composant `MyAccount` */}
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

// import React from "react";
// import Sidebar1 from "./components/Sidebar1";
// import Header1 from "./components/Header1";
// import DashboardContent from "./components/DashboardContent";

// function App() {
//   return (
//     <div className="flex bg-gray-100 min-h-screen">
//       {/* Sidebar */}
//       <Sidebar1 />

//       <div className="flex-1">
//         {/* Header */}
//         <Header1 />

//         {/* Main Dashboard */}
//         <DashboardContent />
//       </div>
//     </div>
//   );
// }

// export default App;
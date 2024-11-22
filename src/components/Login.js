import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const logoImage = "/assets/logo.png";
const midImage = "/assets/tel.jpeg";

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Fonction de gestion du clic sur le bouton Sign In
  const handleSignIn = (e) => {
    e.preventDefault();

    // Vérification de l'email et du mot de passe
    if (email && password) {
      onLogin(); // Active l'authentification
      navigate('/dashboard'); // Redirection vers le tableau de bord
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Header */}
      <header className="w-full py-4 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-blue-600">WeCare</span>
            <img src={logoImage} alt="WeCare Logo" className="w-8 h-8" />
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About Us</a>
            <a href="#how" className="text-gray-600 hover:text-blue-600">How to use</a>
            <select className="text-gray-600 bg-transparent focus:outline-none cursor-pointer">
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
            <Link to="/login" className="text-blue-600 font-semibold">Sign In</Link>
            <Link to="/register">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-full">Register</button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl flex w-full shadow-lg rounded-lg overflow-hidden mt-10">
        <div className="w-1/2 bg-gradient-to-b from-blue-200 to-purple-300 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">Sign in to get your lifestyle</h2>
          <p className="text-gray-700">
            If you don't have an account you can{" "}
            <Link to="/register" className="text-blue-600 cursor-pointer">Register here!</Link>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={midImage} alt="Lifestyle" className="object-cover" style={{ height: '420px', width: '350px' }} />
        </div>

        <div className="w-1/2 p-8 bg-white flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-8">Welcome Back</h2>
          <form onSubmit={handleSignIn}>
            <input
              type="email"
              placeholder="Enter Email"
              className="border rounded w-full py-2 px-3 mb-4 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded w-full py-2 px-3 mb-4 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

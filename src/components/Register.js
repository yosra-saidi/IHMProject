import React from 'react';
import { useNavigate } from 'react-router-dom';

// Adjust paths as needed for your images
const logoImage = "/assets/logo.png";  
const midImage = "/assets/tel.jpeg";  

function Register() {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle redirect after successful registration
  const handleRegister = () => {
    // You can perform any registration logic here (e.g., API calls)

    // After registration, navigate to the dashboard
    navigate("/dashboard"); 
  };

  // Function to navigate to login page
  const goToLogin = () => {
    navigate("/login"); // Redirects to the login page
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
            <button 
              onClick={goToLogin} 
              className="text-blue-600 font-semibold"
            >
              Sign In
            </button>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full">Register</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl flex w-full shadow-lg rounded-lg overflow-hidden mt-10">
        {/* Left Section */}
        <div className="w-1/2 bg-gradient-to-b from-blue-200 to-purple-300 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">Join Us to Get Started!</h2>
          <p className="text-gray-700">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer" onClick={goToLogin}>Sign in here!</span>
          </p>
        </div>

        {/* Center Image */}
        <div className="flex justify-center items-center">
          <img src={midImage} alt="Lifestyle" className="object-cover" style={{ height: '500px', width: '490px' }} />
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8 bg-white flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-8">Create Your Account</h2>
          <form>
            {/* Email */}
            <input
              type="email"
              placeholder="Enter Email"
              className="border rounded w-full py-2 px-3 mb-4 focus:outline-none"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="border rounded w-full py-2 px-3 mb-4 focus:outline-none"
            />

            {/* Age and Gender */}
            <div className="flex space-x-4 mb-4">
              <input
                type="number"
                placeholder="Age"
                className="border rounded w-full py-2 px-3 focus:outline-none"
              />
              <select
                className="border rounded w-full py-2 px-3 focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Height and Weight */}
            <div className="flex space-x-4 mb-4">
              <input
                type="number"
                placeholder="Height"
                className="border rounded w-full py-2 px-3 focus:outline-none"
              />
              <input
                type="number"
                placeholder="Weight"
                className="border rounded w-full py-2 px-3 focus:outline-none"
              />
            </div>

            {/* Register Button */}
            <button 
              type="button" 
              className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition"
              onClick={handleRegister} // Bind the click event to handle registration
            >
              Register
            </button>
          </form>

          {/* Alternative login options */}
          <div className="mt-6 text-center">Or continue with</div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="border p-2 rounded-full">
              <img src="/assets/google-logo.png" alt="Google" className="w-5 h-5" />
            </button>
            <button className="border p-2 rounded-full">
              <img src="/assets/apple-logo.png" alt="Apple" className="w-5 h-5" />
            </button>
            <button className="border p-2 rounded-full">
              <img src="/assets/facebook-logo.png" alt="Facebook" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

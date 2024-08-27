import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Section - Investment Image */}
      <div 
        className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/cypto.jpeg')",
          backgroundSize: "cover", 
          backgroundPosition: "center", 
        }}
      >
        {/* Optional: You can add overlay text or any other content here */}
      </div>

      {/* Right Section - Login Form */}
      <div className="flex flex-col justify-center w-full md:w-1/2 p-8 bg-gray-900">
        <div className="max-w-xl mx-auto bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-12">
          <h2 className="text-4xl font-bold text-center text-red-600">Login</h2>
          <form className="space-y-6 mt-8">
            <div>
              <label className="block text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-500">
                <input type="checkbox" className="mr-2 rounded bg-gray-800 border-gray-700" />
                Remember me
              </label>
              <a href="#" className="text-sm text-red-600 hover:underline">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-500 mt-6">
            Don't have an account? <Link to="/signup" className="text-red-600 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

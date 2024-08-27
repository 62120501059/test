import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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

      </div>

      {/* Right Section - Sign Up Form */}
      <div className="flex flex-col justify-center w-full md:w-1/2 p-8 bg-gray-900">
        <div className="max-w-xl mx-auto bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-12">
          <h2 className="text-4xl font-bold          text-center text-red-600">Sign Up</h2>
          <form className="space-y-6 mt-8">
            <div>
              <label className="block text-sm font-medium text-gray-400">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your full name"
              />
            </div>
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
            <div>
              <label className="block text-sm font-medium text-gray-400">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-500 mt-6">
            Already have an account? <Link to="/" className="text-red-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;


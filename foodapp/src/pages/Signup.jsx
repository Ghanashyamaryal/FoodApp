import React from "react";
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-400">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-6 text-gray-700">SIGN UP</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400" />
          <button type="submit" className="w-full bg-pink-400 text-white px-4 py-2 rounded shadow font-semibold text-lg hover:bg-pink-500 transition">SIGN UP</button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="mx-2 text-gray-400 text-xs">OR</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <button className="bg-white border rounded-full p-2 text-red-500 hover:bg-gray-100"><FaGoogle size={20} /></button>
          <button className="bg-white border rounded-full p-2 text-blue-600 hover:bg-gray-100"><FaFacebookF size={20} /></button>
          <button className="bg-white border rounded-full p-2 text-blue-800 hover:bg-gray-100"><FaLinkedinIn size={20} /></button>
        </div>
        <div className="text-center text-sm text-gray-600">
          Already a user? <a href="/login" className="text-pink-500 font-semibold hover:underline">LOGIN</a>
        </div>
      </div>
    </div>
  );
};

export default Signup; 
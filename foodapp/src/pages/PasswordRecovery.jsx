import React from "react";

const PasswordRecovery = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Password Recovery</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <button type="submit" className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">Send Recovery Email</button>
        </form>
        <div className="flex justify-center mt-4 text-sm">
          <a href="/login" className="text-orange-500 hover:underline">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery; 
import React from "react";

const Account = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order History */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Order History</h2>
          <ul className="space-y-2">
            {/* Placeholder orders */}
            <li className="border-b pb-2">Order #1234 - $29.99 - 2024-07-10</li>
            <li className="border-b pb-2">Order #1233 - $15.50 - 2024-07-08</li>
          </ul>
        </div>
        {/* Favorites */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Favorite Items</h2>
          <ul className="space-y-2">
            {/* Placeholder favorites */}
            <li className="border-b pb-2">Pizza Margherita</li>
            <li className="border-b pb-2">Chocolate Cake</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account; 
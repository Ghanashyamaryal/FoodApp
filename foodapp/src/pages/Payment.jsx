import React from "react";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const foodName = location.state?.foodName || "Food Item (Sample)";

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Payment successful!");
  };

  return (
    <div className="max-w-[500px] mx-auto py-12 px-4">
      <h1 className="text-3xl font-extrabold text-center text-orange-500 mb-8">Payment</h1>
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <ul className="text-gray-700 mb-4">
          <li>1x {foodName}</li>
          <li>Delivery: Free</li>
        </ul>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹290.99</span>
        </div>
      </div>
      <form className="bg-[#fff4ee] rounded-xl shadow p-6 space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-2">Payment Details</h2>
        <input type="text" placeholder="Cardholder Name" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none" />
        <input type="text" placeholder="Card Number" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none" />
        <div className="flex gap-4">
          <input type="text" placeholder="MM/YY" className="w-1/2 px-4 py-2 rounded border border-gray-300 focus:outline-none" />
          <input type="text" placeholder="CVC" className="w-1/2 px-4 py-2 rounded border border-gray-300 focus:outline-none" />
        </div>
        <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded font-semibold text-lg hover:bg-orange-600 transition mt-4">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment; 
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(AppContext);
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="mx-auto max-w-[1360px] py-8 px-2">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500 py-16">Your cart is empty.</div>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item, idx) => (
            <div key={item.id + '-' + idx} className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow p-4 gap-4">
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded" />
              <div className="flex-1 w-full">
                <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
                <div className="text-gray-500 text-sm mb-1">{item.cuisine}</div>
                <div className="text-orange-600 font-bold text-lg mb-2">₹{item.price || '290.99'}</div>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-6">
            <span className="text-xl font-bold">Total: </span>
            <span className="text-2xl text-orange-600 font-bold">₹{total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 
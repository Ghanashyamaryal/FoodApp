import React, { useEffect, useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const getRandomDiscount = () => Math.floor(Math.random() * 41) + 10; // 10-50%

const Offer = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=24")
      .then(res => res.json())
      .then(data => {
        setOffers(data.recipes || []);
        setLoading(false);
      });
  }, []);

  const handleOrderNow = (offer) => {
    toast.success("Redirecting to payment...");
    setTimeout(() => {
      navigate("/payment", { state: { foodName: offer.name } });
    }, 800);
  };

  return (
    <div className="mx-auto max-w-[1360px] py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Special Meal Offers</h1>
      {loading ? (
        <div className="text-center py-16">Loading offers...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {offers.map(offer => {
            const discount = getRandomDiscount();
            const price = offer.price || 290.99;
            const discountedPrice = (price * (1 - discount / 100)).toFixed(2);
            return (
              <div key={offer.id} className="bg-white rounded-lg shadow p-0 flex flex-col items-center hover:shadow-lg transition cursor-pointer relative overflow-hidden">
                {/* Offer Tag */}
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
                  {discount}% OFF
                </span>
                <img src={offer.image} alt={offer.name} className="w-full h-40 object-cover rounded-t mb-2" />
                <div className="p-4 flex flex-col flex-1 w-full">
                  <h2 className="text-lg font-semibold mb-1 text-center line-clamp-2">{offer.name}</h2>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{offer.rating}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-gray-400 line-through text-sm">₹{price}</span>
                    <span className="text-orange-600 font-bold text-xl">₹{discountedPrice}</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                      className="bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600 transition cursor-pointer w-1/2 font-semibold"
                      onClick={() => addToCart(offer)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="bg-yellow-700 text-white px-3 py-2 rounded hover:bg-yellow-800 transition cursor-pointer w-1/2 font-semibold"
                      onClick={() => handleOrderNow(offer)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Offer; 
import React, { useEffect, useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
import { motion, useAnimation } from "framer-motion";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FoodShowcase = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=100")
      .then(res => res.json())
      .then(data => {
        setRecipes(data.recipes || []);
        setLoading(false);
      });
  }, []);

  // Unique cuisines as categories, with a sample food image for each
  const cuisineMap = {};
  recipes.forEach(r => {
    if (!cuisineMap[r.cuisine]) cuisineMap[r.cuisine] = r.image;
  });
  const cuisines = Object.entries(cuisineMap); // [ [cuisine, image], ... ]

  // Top 6 popular dishes by rating
  const popular = [...recipes].sort((a, b) => b.rating - a.rating).slice(0, 6);
  // Last 3 recipes as mock recent orders
  const recent = recipes.slice(-3);

  // Framer Motion auto-scroll logic
  const controls = useAnimation();
  useEffect(() => {
    let direction = -1;
    let x = 0;
    let frame;
    const animate = () => {
      x += direction * 0.5; // speed
      if (x < -cuisines.length * 140) x = 0;
      if (x > 0) x = -cuisines.length * 140;
      controls.set({ x });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [controls, cuisines.length]);

  // Handle Order Now
  const handleOrderNow = (dish) => {
    toast.success("Redirecting to payment...");
    setTimeout(() => {
      navigate("/payment", { state: { foodName: dish.name } });
    }, 800);
  };

  return (
    <div className="space-y-12 max-w-[1360px] w-full mx-auto">
      {/* Category */}
      <div>
        <h2 className="text-3xl font-extrabold mb-4 text-center">Category</h2>
        <div className="overflow-x-hidden pb-2 relative w-full">
          <motion.div
            className="flex gap-6"
            animate={controls}
            style={{ willChange: 'transform' }}
          >
            {cuisines.map(([cuisine, image], i) => (
              <div key={i} className="flex flex-col items-center min-w-[140px] cursor-pointer">
                <img src={image} alt={cuisine} className="w-28 h-28 object-cover rounded-full mb-1 border-2 border-orange-200" />
                <span className="text-sm font-medium text-center">{cuisine}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Popular Dishes */}
      <div>
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-3xl font-extrabold text-center">Popular Dishes</h2>
          <button className="text-orange-500 font-semibold text-sm mt-2">View all</button>
        </div>
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {popular.map((dish) => (
              <div key={dish.id} className="bg-white rounded-xl shadow p-0 relative cursor-pointer overflow-hidden flex flex-col">
                <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover rounded-t" />
                <div className="p-4 flex flex-col flex-1 w-full">
                  <h3 className="text-lg font-bold mb-1">{dish.name}</h3>
                  <div className="text-sm text-gray-500 mb-1">{dish.cuisine}</div>
                  <div className="flex items-center gap-1 mb-2">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{dish.rating}</span>
                    <span className="text-xs text-gray-400">/ 5</span>
                  </div>
                  <div className="text-orange-600 font-bold text-xl mb-2">₹{dish.price || '290.99'}</div>
                  <div className="flex gap-2 mt-auto">
                    <button
                      className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition cursor-pointer w-1/2 font-semibold"
                      onClick={() => { addToCart(dish); toast.success("Added to cart!"); }}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-800 transition cursor-pointer w-1/2 font-semibold"
                      onClick={() => handleOrderNow(dish)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Recent Orders */}
      <div>
        <h2 className="text-3xl font-extrabold mb-4 text-center">Recent Orders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recent.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center cursor-pointer">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-full mb-2 border-2 border-orange-200" />
              <span className="text-lg font-semibold mb-1 text-center">{item.name}</span>
              <div className="text-orange-600 font-bold text-lg mb-1">₹{item.price || '290.99'}</div>
              <div className="flex gap-2 mt-2 w-full">
                <button
                  className="bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600 transition cursor-pointer w-1/2 font-semibold"
                  onClick={() => { addToCart(item); toast.success("Added to cart!"); }}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-yellow-700 text-white px-3 py-2 rounded hover:bg-yellow-800 transition cursor-pointer w-1/2 font-semibold"
                  onClick={() => handleOrderNow(item)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodShowcase; 
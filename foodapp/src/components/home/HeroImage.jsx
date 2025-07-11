import React from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const foodTags = [
  "Pizza", "Burger", "Salad", "Chicken", "Pasta", "Soup", "Sandwich", "Rice", "Fish", "Dessert"
];

const HeroImage = ({ query, setQuery, onSearch }) => (
  <section className="flex flex-col md:flex-row items-center justify-between bg-[#f9f6f6] py-12 px-4 md:px-16 rounded-2xl shadow mb-8 max-w-[1360px] w-full mx-auto">
    {/* Left */}
    <div className="flex-1 mb-8 md:mb-0 md:pr-8 w-full">
      <div className="flex items-center gap-2 text-red-500 font-semibold mb-2">
        <FaMapMarkerAlt />
        <span>Kathmandu</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">Discover restaurants<br />that deliver near you.</h1>
      <form className="flex items-center bg-white rounded-full shadow w-full max-w-xl" onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Search for food (e.g. Pizza, Burger)"
          className="flex-1 px-6 py-4 rounded-l-full focus:outline-none text-lg"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit" className="bg-red-500 text-white px-8 py-4 rounded-r-full flex items-center gap-2 font-semibold text-lg cursor-pointer">
          OK <FaArrowRight />
        </button>
      </form>
      {/* Food Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {foodTags.map(tag => (
          <button
            key={tag}
            type="button"
            className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium cursor-pointer hover:bg-orange-200 transition"
            onClick={() => setQuery(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
    {/* Right */}
    <div className="flex-1 flex justify-center items-center w-full md:w-1/2">
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
        alt="Delicious food"
        className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover object-center"
        style={{ minWidth: '320px', maxWidth: '100%' }}
      />
    </div>
  </section>
);

export default HeroImage; 
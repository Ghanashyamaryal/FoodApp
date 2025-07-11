import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Features from "../components/home/Features";
import HeroImage from "../components/home/HeroImage";
import FoodShowcase from "../components/home/FoodShowcase";

const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/product-listing?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-[1360px] mx-auto px-2 items-center w-full">
      <HeroImage query={query} setQuery={setQuery} onSearch={handleSearch} />
      <FoodShowcase />
      <Features />
    </div>
  );
};

export default Home; 
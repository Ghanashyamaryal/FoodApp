import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const PAGE_SIZE = 12;

const ProductListing = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("q") || "";
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState(initialSearch);
  const [cuisine, setCuisine] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/recipes?limit=150")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes || []);
        setFiltered(data.recipes || []);
        setLoading(false);
      });
  }, []);

  // Filter/search logic
  useEffect(() => {
    let data = recipes;
    if (search) {
      data = data.filter((r) =>
        r.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (cuisine) {
      data = data.filter((r) => r.cuisine === cuisine);
    }
    setFiltered(data);
    setPage(1);
  }, [search, cuisine, recipes]);

  // Update search if URL changes
  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  // Handle Order Now
  const handleOrderNow = (item) => {
    toast.success("Redirecting to payment...");
    setTimeout(() => {
      navigate("/payment", { state: { foodName: item.name } });
    }, 800);
  };

  // Pagination
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Unique cuisines for filter
  const cuisines = Array.from(new Set(recipes.map((r) => r.cuisine)));

  return (
    <div className="mx-auto max-w-[1360px] py-8 px-2">
      <h1 className="text-3xl font-bold mb-6 text-center">Menu</h1>
      {/* Search & Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <select
          className="px-4 py-2 rounded border border-gray-300 cursor-pointer"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        >
          <option value="">All Cuisines</option>
          {cuisines.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      {/* Food Grid */}
      {loading ? (
        <div className="text-center py-16">Loading recipes...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginated.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center transition hover:shadow-lg cursor-pointer"
            >
              <img
                src={r.image}
                alt={r.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold mb-1 text-center">{r.name}</h3>
              <div className="text-sm text-gray-500 mb-1">{r.cuisine}</div>
              <div className="flex gap-1 mb-2 flex-wrap justify-center">
                {r.tags?.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-yellow-500 font-bold">★</span>
                <span className="font-medium">{r.rating}</span>
                <span className="text-xs text-gray-400">({r.reviewCount} reviews)</span>
              </div>
              <div className="flex gap-2 w-full mt-auto">
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition cursor-pointer w-1/2 font-semibold"
                  onClick={() => { addToCart(r); toast.success("Added to cart!"); }}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-800 transition cursor-pointer w-1/2 font-semibold"
                  onClick={() => handleOrderNow(r)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-4 py-2 rounded border border-gray-300 hover:bg-orange-100 cursor-pointer ${
                p === page ? "bg-orange-500 text-white" : ""
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListing; 
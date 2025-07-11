import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const FoodDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        setRecipe(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (!recipe) return <div className="text-center py-8">Recipe not found.</div>;

  return (
    <div className="mx-auto max-w-[1360px] py-8 px-2">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow p-6">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
          <img
            src={recipe.image || "https://via.placeholder.com/256"}
            alt={recipe.name}
            className="w-80 h-80 object-cover rounded-lg shadow"
          />
        </div>
        {/* Details */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
          <div className="flex flex-wrap gap-2 items-center mb-2">
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded text-sm font-medium">{recipe.cuisine}</span>
            {recipe.tags?.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold text-lg">{recipe.rating}</span>
            <span className="text-gray-500 text-sm">({recipe.reviewCount} reviews)</span>
          </div>
          {/* Ingredients */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-1">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {recipe.ingredients?.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>
          {/* Instructions */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-1">Instructions</h2>
            <p className="text-gray-700 whitespace-pre-line text-sm">{recipe.instructions}</p>
          </div>
          {/* Nutrition */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-1">Nutritional Information</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              <li>Calories: {recipe.calories || "-"}</li>
              <li>Protein: {recipe.protein || "-"}</li>
              <li>Fat: {recipe.fat || "-"}</li>
              <li>Carbs: {recipe.carbs || "-"}</li>
            </ul>
          </div>
          {/* Add to Cart Button */}
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition mb-6 cursor-pointer w-full max-w-xs self-center">
            Add to Cart
          </button>
          {/* Reviews */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
            <div className="space-y-2">
              {/* Example reviews, replace with dynamic data if available */}
              <div className="bg-gray-100 p-3 rounded flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <p className="font-semibold">John Doe</p>
                <span>"Amazing taste! Will order again."</span>
              </div>
              <div className="bg-gray-100 p-3 rounded flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <p className="font-semibold">Jane Smith</p>
                <span>"Loved the flavors and quick delivery."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail; 
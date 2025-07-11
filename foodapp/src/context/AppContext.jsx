import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data.recipes || []));
  }, []);

  // Cart functions
  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
  };
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <AppContext.Provider value={{ recipes, cart, addToCart, removeFromCart, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}; 
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
    setCart(prev => {
      const found = prev.find(i => i.id === item.id);
      const price = item.price !== undefined ? item.price : 290.99;
      if (found) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        return [...prev, { ...item, price, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (id) => {
    setCart(prev => {
      const found = prev.find(i => i.id === id);
      if (found && found.quantity > 1) {
        return prev.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i);
      } else {
        return prev.filter(i => i.id !== id);
      }
    });
  };
  const incrementQuantity = (id) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
  };
  const decrementQuantity = (id) => {
    setCart(prev => {
      const found = prev.find(i => i.id === id);
      if (found && found.quantity > 1) {
        return prev.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i);
      } else {
        return prev.filter(i => i.id !== id);
      }
    });
  };

  return (
    <AppContext.Provider value={{ recipes, cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}; 
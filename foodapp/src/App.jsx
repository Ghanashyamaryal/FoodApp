import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import FoodDetail from "./pages/FoodDetail";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordRecovery from "./pages/PasswordRecovery";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Service from "./pages/Service";
import Offer from "./pages/Offer";
import Payment from "./pages/Payment";
import About from "./pages/About";
import { AppProvider } from "./context/AppContext";
import { FaHome, FaUtensils, FaUser, FaPhone, FaSignInAlt, FaShoppingCart } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Toaster position="top-center" />
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-listing" element={<ProductListing />} />
            <Route path="/food/:id" element={<FoodDetail />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/service" element={<Service />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AppProvider>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function removeFromCart(product) {
    setCart(prev => prev.filter(item => item.id !== product.id))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} cartLength={cart.length} />}/>
        <Route path="/about" element={<About cartLength={cart.length} />}/>
        <Route path="/signin" element={<SignIn cartLength={cart.length} />}/>
        <Route path="/signup" element={<SignUp cartLength={cart.length} />}/>
        <Route path="/dashboard" element={<DashboardLayout cartLength={cart.length}/>}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/products/:productId" element={<ProductDetails onAddToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

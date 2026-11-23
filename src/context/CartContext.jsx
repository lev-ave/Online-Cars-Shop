import {
  createContext,
  useState,
} from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (product) => {
    setCart((prev) =>
      prev.filter(item => item.id !== product.id)
    );
  };

  const cartCount = cart.length;

  const totalPrice = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const cartValue = {
    cart,
    addToCart,
    removeFromCart,
    cartCount,
    totalPrice,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
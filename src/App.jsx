import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

function App() {
  // Cart stores { product, quantity } objects in memory only
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [lastOrder, setLastOrder] = useState(null);

  // Add a product to the cart.
  // If the product already exists, increase its quantity (capped by stock).
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);

      if (existing) {
        return prevCart.map((item) => {
          if (item.product.id !== product.id) return item;
          const newQty = Math.min(item.quantity + quantity, product.stock);
          return { ...item, quantity: newQty };
        });
      }

      const safeQty = Math.min(Math.max(quantity, 1), product.stock);
      if (safeQty < 1 || product.stock < 1) return prevCart;
      return [...prevCart, { product, quantity: safeQty }];
    });
  };

  // Remove a product completely from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  // Increase quantity for a cart item (max = stock)
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.product.id !== productId) return item;
        if (item.quantity >= item.product.stock) return item;
        return { ...item, quantity: item.quantity + 1 };
      })
    );
  };

  // Decrease quantity for a cart item (min = 1)
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.product.id !== productId) return item;
        if (item.quantity <= 1) return item;
        return { ...item, quantity: item.quantity - 1 };
      })
    );
  };

  // Calculate cart total price
  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  // Calculate total quantity of all items (for navbar counter)
  const getCartItemCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  // Place order: store order info, clear cart
  const placeOrder = (order) => {
    setLastOrder(order);
    setCart([]);
  };

  const cartItemCount = getCartItemCount();
  const cartTotal = getCartTotal();

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#eff7f6] text-[#263238]">
        <Navbar
          cartItemCount={cartItemCount}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  visibleCount={visibleProducts}
                  setVisibleCount={setVisibleProducts}
                  onAddToCart={(product) => addToCart(product, 1)}
                />
              }
            />
            <Route
              path="/product/:id"
              element={<ProductDetails onAddToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onRemove={removeFromCart}
                  cartTotal={cartTotal}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <Checkout
                  cart={cart}
                  cartTotal={cartTotal}
                  onPlaceOrder={placeOrder}
                />
              }
            />
            <Route path="/success" element={<Success lastOrder={lastOrder} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

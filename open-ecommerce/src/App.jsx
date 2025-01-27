import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Rout from './router/rout';
import Nav from './components/Nav';
import Cart from './components/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Toggle the cart visibility
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  // Add a product to the cart if it doesn't already exist
  const addToCart = (product) => {
    console.log('Attempting to add to cart:', product);

    // Check if the product already exists in the cart
    const exists = cartItems.some((item) => item.id === product.id);

    if (!exists) {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    } else {
      console.log('Item already exists in the cart. Skipping.');
    }
  };

  // Remove a product from the cart by ID
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Nav toggleCart={toggleCart} cartItemsCount={cartItems.length} />
      <Rout addToCart={addToCart} />
      <Cart
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </BrowserRouter>
  );
}

export default App;

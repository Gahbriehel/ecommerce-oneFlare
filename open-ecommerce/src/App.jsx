import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Rout from './router/rout';
import Nav from './components/Nav';
import Cart from './components/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const addToCart = (product) => {
    console.log('Adding item to cart:', product);

    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);

      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity } // Update quantity
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: product.quantity }];
      }
    });
  };


  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    console.log(`Item ${id} is being removed from cart`);

  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Nav toggleCart={toggleCart} cartItemsCount={cartItems.length} />
      <Rout toggleCart={toggleCart} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      <Cart
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </BrowserRouter>
  );
}

export default App;

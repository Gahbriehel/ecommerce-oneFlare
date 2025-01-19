import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react';
import Rout from './router/rout';
import Nav from './components/Nav';
import Cart from './components/Cart'


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  }

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  }

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <>
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
    </>
  )
}

export default App

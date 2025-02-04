import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
// import Nav from '../components/Nav'
import ProductDetails from '../components/ProductDetails'
import Contact from '../components/Contact'
import Checkout from '../components/Checkout'
import CartPage from '../components/CartPage'
import Confirmation from '../components/Confirmation'
// import updateQuantity from '../components/updateQuantity'


const Rout = ({ addToCart, removeFromCart, cartItems, updateQuantity, toggleCart }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home addToCart={addToCart} />} />
        <Route path='/checkout' element={<Checkout cartItems={cartItems} />} />
        <Route path='/checkout/confirmation' element={<Confirmation />} />
        <Route path='/product/:id' element={<ProductDetails addToCart={addToCart} cartItems={cartItems} updateQuantity={updateQuantity} toggleCart={toggleCart} />} />
        <Route path='/cart' element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default Rout
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
// import Nav from '../components/Nav'
import ProductDetails from '../components/ProductDetails'
import Contact from '../components/Contact'
import Checkout from '../components/Checkout'


const Rout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default Rout
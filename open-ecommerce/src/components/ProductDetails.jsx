import './css/productDetails.css'
import { Link, useLocation } from 'react-router-dom'
import { FiShare } from "react-icons/fi";
import Footer from './Country';
import Socials from './Socials';
import { useState } from 'react';
import { FaRegTrashAlt, FaArrowLeft } from "react-icons/fa";
import QuantityCounter from './QuantityCounter';




const ProductDetails = () => {
    const location = useLocation()
    const { product, products } = location.state;
    const [showCheckout, setShowCheckout] = useState(false);

    const handleBuyBtnClick = () => {
        setShowCheckout(true)
    }

    const closeCheckoutPanel = () => {
        setShowCheckout(false)
    }

    return (
        <div className='pd-product-container'>
            <div className='pd-product-details'>
                <div className='pd-product-image'>
                    <img src={product.image} alt='product-image' />
                </div>
                <div className='pd-product-info'>
                    <h2>{product.name}</h2>
                    <div className='pd-prices'>
                        <p className="pd-old-price">₦ {new Intl.NumberFormat('en-us').format(product.oldPrice)} </p>
                        <p className="pd-price">₦ {new Intl.NumberFormat('en-us').format(product.price)}</p>
                        <button className='pd-sale-btn'>Sale</button>
                    </div>
                    <div className='pd-product-color-btns'>
                        <p>Colour</p>
                        <button className='btn brown'>Brown</button>
                        <button className='btn coffee'>Coffee</button>
                        <button className='btn black'>Black</button>
                        <button className='btn off-white'>Off white</button>
                    </div>
                    <p className='quantity-text'>Quantity</p>
                    <QuantityCounter />
                    <button className='action-btns pd-btn'>Add to cart</button>
                    <br />
                    <button className='action-btns buy-btn' onClick={handleBuyBtnClick}>Buy it now</button>
                    <br />
                    <button className='share-btn'><FiShare /> Share</button>
                </div>
                {
                    showCheckout && (
                        <div className='checkout-container'>
                            <div className='checkout-header'>
                                <button onClick={closeCheckoutPanel}><FaArrowLeft /></button>
                                <h2>Buy It Now</h2>
                            </div>
                            <div className='buy-it-now-container'>
                                <div className='checkout-product-details'>
                                    <div className='checkout-product-image'>
                                        <img src={product.image} alt='product image' />
                                    </div>
                                    <div className='checkout-product-info'>
                                        <h3>{product.name}</h3>
                                        <div className='checkout-prices'>
                                            <p className="checkout-old-price">₦ {new Intl.NumberFormat('en-us').format(product.oldPrice)} </p>
                                            <p className="checkout-price">₦ {new Intl.NumberFormat('en-us').format(product.price)}</p>
                                            <button className='checkout-sale-btn'>Sale</button>
                                        </div>
                                        <div className='quantity-container'>
                                            <QuantityCounter />
                                            <button><FaRegTrashAlt /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='checkout-actions'>
                                    <label htmlFor='instruction'>Order Special Instruction :</label>
                                    <br />
                                    <input type='text' id='instruction' placeholder='Enter order special instruction'></input>
                                    <div className='checkout'>
                                        <div className='subtotal'>
                                            <p>Subtotal</p>
                                            <p>₦ {new Intl.NumberFormat('en-us').format(product.price)}</p>
                                        </div>
                                        <div className='complete-checkout'>
                                            <p>Taxes and shipping will be calculated at checkout</p>
                                            <Link to='/checkout'><button className='action-btns checkout' >Checkout</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='more'>
                <h3>You may also like:</h3>
                <div className='spd-products'>
                    {
                        products.slice(0, 4).map(product => {
                            return (
                                <div key={product.id}>
                                    <div className='spd-box'>
                                        <div className="spd-image-box">
                                            <Link to={`/product/${product.id}`} state={{ product }}><img src={product.image} alt="product" className="pd-product-image-small"></img></Link>
                                        </div>
                                        <div className="spd-product-info">
                                            <p>{product.name}</p>
                                            <p className="spd-old-price">₦ {new Intl.NumberFormat('en-us').format(product.oldPrice)}</p>
                                            <p className="spd-price">₦ {new Intl.NumberFormat('en-us').format(product.price)}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
            <Socials />
        </div>
    )
}

export default ProductDetails
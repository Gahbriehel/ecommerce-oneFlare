import { useRef, useState } from 'react';
import * as React from 'react'
import useOnClickOutside from 'use-onclickoutside';
import './css/productDetails.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiShare } from "react-icons/fi";
import Footer from './Country';
import { FaArrowLeft } from "react-icons/fa";
import QuantityCounter from './QuantityCounter';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductDetails = ({ addToCart, cartItems, updateQuantity, toggleCart }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const { product, products } = location.state;

    const cartItem = cartItems.find((item) => item.id === product.id)
    const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);
    const [mainImage, setMainImage] = useState(product.image)
    const [showCheckout, setShowCheckout] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [selectedItem, setSelectedItem] = useState('')
    const moreProductsRef = useRef(null);
    const buyRef = useRef(null);

    useOnClickOutside(buyRef, () => {
        if (showCheckout) {
            handleClose();
        }
    })

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            setShowCheckout(false)
            setIsClosing(false)
        }, 300)
    }

    const handleMainImageChange = (image) => { setMainImage(image); }


    const handleBuyBtnClick = () => { setShowCheckout(true); };

    const closeCheckoutPanel = () => { handleClose(); };

    const proceedToCheckout = () => {
        addToCart({ ...product, quantity });
        navigate('/checkout')
    }

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart({ ...product, quantity });
        console.log("item added to cart", quantity);
        toggleCart()
    };

    const scrollMoreProducts = (direction) => {
        if (moreProductsRef.current) {
            const scrollAmount = 300;
            if (direction === 'left') {
                moreProductsRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                moreProductsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className='pd-product-container' >
            <div className='pd-product-details'>
                <div className="details-div">
                    <div className='pd-product-image'>
                        <div className="pd-product-image-main">
                            <img src={mainImage} alt='product-image' />
                        </div>
                        {product.images && (
                            <div className="extra-images">
                                {product.images.extra1 &&
                                    <img
                                        src={product.images.extra1}
                                        alt="image"
                                        onClick={() => handleMainImageChange(product.images.extra1)}
                                    />}
                                {product.images.extra2 &&
                                    <img
                                        src={product.images.extra2}
                                        alt="image"
                                        onClick={() => handleMainImageChange(product.images.extra2)}
                                    />}
                                {product.images.extra3 &&
                                    <img
                                        src={product.images.extra3}
                                        alt="image"
                                        onClick={() => handleMainImageChange(product.images.extra3)}
                                    />}
                                {product.images.extra4 &&
                                    <img
                                        src={product.images.extra4}
                                        alt="image"
                                        onClick={() => handleMainImageChange(product.images.extra4)}
                                    />}
                            </div>)}
                    </div>
                    <div className='pd-product-info'>
                        <div className="pd-product-info-top">
                            <div className="pd-product-info-top-name">
                                <h2>{product.name}</h2>
                            </div>
                            <div className="pd-product-info-top-btns">
                                <FiShare />
                                <div className="arrows">
                                    <IoIosArrowBack />
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                        <div className='pd-prices'>
                            <p className="pd-old-price">₦{product.oldPrice.toFixed(2)} </p>
                            <p className="pd-price">₦{product.price.toFixed(2)}</p>
                            <p className='pd-in-stock' style={{ color: 'var(--purple-btn-color)' }}>In stock</p>
                        </div>
                        <div className='pd-product-color-select'>
                            <p className='pd-category-text'>Category: {product.category}</p>
                            <label>
                                Sub-Category:
                                <br />
                                <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} name="item-color" id="item-color">
                                    <option disabled>Choose item color</option>
                                    <option value="Brown">Brown</option>
                                    <option value="Black">Black</option>
                                    <option value="White">White</option>
                                    <option value="Blue">Blue</option>
                                </select>
                            </label>
                            <p className='pd-barcode'>SKU: {product.barcode}</p>
                        </div>
                        <p className='quantity-text'>Quantity</p>
                        <QuantityCounter
                            quantity={quantity}
                            onUpdateQuantity={setQuantity}
                        />
                        <button className='action-btns pd-btn' onClick={handleAddToCart}>Add to cart</button>
                        <br />
                        <button className='action-btns buy-btn' onClick={handleBuyBtnClick}>Buy it now</button>
                        <br />
                    </div>
                </div>
                {showCheckout && (
                    <div ref={buyRef} className={`checkout-container ${isClosing ? 'hiding' : ''}`}>
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
                                        <p className="checkout-old-price">₦{new Intl.NumberFormat('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(product.oldPrice)} </p>
                                        <p className="checkout-price">₦{new Intl.NumberFormat('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(product.price)}</p>
                                        <p className='pd-in-stock1'>In stock</p>
                                    </div>
                                    <p >{selectedItem}</p>
                                    <div className='quantity-container small-quantity-counter'>
                                        <QuantityCounter
                                            quantity={quantity}
                                            onUpdateQuantity={setQuantity}
                                        />
                                        {/* <button className='del-btn'><FaRegTrashAlt className='del-btn' /></button> */}
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
                                        <p>₦ {new Intl.NumberFormat('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(product.price)}</p>
                                    </div>
                                    <div className='complete-checkout'>
                                        <p>Taxes and shipping will be calculated at checkout</p>
                                        <button onClick={proceedToCheckout} className='action-btns checkout'>Checkout</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='more'>
                <h3>You may also like:</h3>
                <div className='more-products-container'>
                    <button className='scroll-button left' onClick={() => scrollMoreProducts('left')}>
                        <IoIosArrowBack />
                    </button>
                    <div className='spd-products' ref={moreProductsRef}>
                        {products.map(product => (
                            <div key={product.id} className='spd-box'>
                                <div className="spd-image-box">
                                    <Link to={`/product/${product.id}`} state={{ product }}>
                                        <img src={product.image} alt="product" className="pd-product-image-small" />
                                    </Link>
                                </div>
                                <div className="spd-product-info">
                                    <p>{product.name}</p>
                                    <p className="spd-old-price">₦{new Intl.NumberFormat('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(product.oldPrice)}</p>
                                    <p className="spd-price">₦{new Intl.NumberFormat('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(product.price)}</p>
                                </div>
                            </div >
                        ))}
                    </div >
                    <button className='scroll-button right' onClick={() => scrollMoreProducts('right')}>
                        <IoIosArrowForward />
                    </button>
                </div >
            </div >
            <Footer />
        </div >
    );
};

export default ProductDetails;

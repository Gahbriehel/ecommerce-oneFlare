import { useRef, useState } from 'react';
import './css/productDetails.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiShare } from "react-icons/fi";
import Footer from './Country';
import { FaRegTrashAlt, FaArrowLeft } from "react-icons/fa";
import QuantityCounter from './QuantityCounter';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductDetails = ({ addToCart, cartItems, updateQuantity }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { product, products } = location.state;

    const cartItem = cartItems.find((item) => item.id === product.id)
    const quantity = cartItem ? cartItem.quantity : 1;

    const [mainImage, setMainImage] = useState(product.image)

    const handleMainImageChange = (image) => {
        console.log(`image ${image} has been clicked`);

        setMainImage(image);
    }

    const [showCheckout, setShowCheckout] = useState(false);
    const moreProductsRef = useRef(null);

    const handleBuyBtnClick = () => {
        setShowCheckout(true);
        console.log("Buy it button clicked")
    };

    const closeCheckoutPanel = () => {
        setShowCheckout(false);
    };

    const proceedToCheckout = () => {
        addToCart(product);
        navigate('/checkout')
    }

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
        <div className='pd-product-container'>
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
                            <p className="pd-old-price">₦{new Intl.NumberFormat('en-us').format(product.oldPrice)} </p>
                            <p className="pd-price">₦{new Intl.NumberFormat('en-us').format(product.price)}</p>
                            <p className='pd-in-stock'>In stock</p>
                        </div>
                        <div className='pd-product-color-select'>
                            <p className='pd-category-text'>Category: {product.category}</p>
                            <p>Sub-Category:</p>
                            <select name="item-color" id="item-color">
                                <option disabled>Choose item color</option>
                                <option value="">Brown</option>
                                <option value="">Black</option>
                                <option value="">White</option>
                                <option value="">Blue</option>
                            </select>
                            <p className='pd-barcode'>SKU: {product.barcode}</p>
                        </div>
                        <p className='quantity-text'>Quantity</p>
                        <QuantityCounter
                            quantity={quantity}
                            onUpdateQuantity={(newQuantity) => {
                                updateQuantity(product.id, newQuantity)
                            }}
                        />
                        <button className='action-btns pd-btn' onClick={() => addToCart(product)}>Add to cart</button>
                        <br />
                        <button className='action-btns buy-btn' onClick={handleBuyBtnClick}>Buy it now</button>
                        <br />
                    </div>
                </div>
                {showCheckout && (
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
                                        <p className="checkout-old-price">₦{new Intl.NumberFormat('en-us').format(product.oldPrice)} </p>
                                        <p className="checkout-price">₦{new Intl.NumberFormat('en-us').format(product.price)}</p>
                                        <p className='pd-in-stock1'>In stock</p>
                                    </div>
                                    <p style={{ margin: "10px" }}>Color</p>
                                    <div className='quantity-container'>
                                        <QuantityCounter
                                            quantity={quantity}
                                            onUpdateQuantity={(newQuantity) => {
                                                updateQuantity(product.id, newQuantity)
                                            }}
                                        />
                                        <button className='del-btn'><FaRegTrashAlt className='del-btn' /></button>
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
                                    <p className="spd-old-price">₦ {new Intl.NumberFormat('en-us').format(product.oldPrice)}</p>
                                    <p className="spd-price">₦ {new Intl.NumberFormat('en-us').format(product.price)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='scroll-button right' onClick={() => scrollMoreProducts('right')}>
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;
import * as React from 'react'
import useOnClickOutside from 'use-onclickoutside'
import { FaRegTrashAlt, FaArrowLeft } from "react-icons/fa";
import "./css/cart.css";
import PropTypes from "prop-types";
import { TbShoppingBag } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import QuantityCounter from "./QuantityCounter";

const Cart = ({ isOpen, toggleCart, cartItems, removeFromCart, addToCart, updateQuantity, close }) => {
    const ref = React.useRef(null)
    useOnClickOutside(ref, () => {
        if (isOpen) {
            toggleCart();
        }
    })

    const handleCartClick = (e) => {
        e.stopPropagation();
    };

    const navigate = useNavigate();

    const navigateFromCart = () => {
        navigate("/");
        toggleCart();
    };

    const navigateToCartPage = () => {
        navigate("/cart")
        toggleCart();
    }

    const navigateToCheckout = () => {
        navigate('/checkout')
        toggleCart();
    }

    const calculateSubtotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div ref={ref} onClick={handleCartClick} className={`cart-container ${isOpen ? "open" : ""}`}>
            <div className="cart-header">
                <button onClick={toggleCart} className="back-btn">
                    <FaArrowLeft />
                </button>
                <h2>My Cart</h2>
            </div>

            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <div className="empty-cart-container">
                        <TbShoppingBag className="cart-bag" />
                        <p>Your shopping cart is empty!</p>
                        <button onClick={navigateFromCart} className="continue-shopping-btn">
                            Continue shopping
                        </button>
                    </div>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-product-image">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                            </div>
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <div className="item-prices">
                                    <p className="checkout-old-price">₦{new Intl.NumberFormat("en-us", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(item.oldPrice)}</p>
                                    <p className="checkout-price">₦{new Intl.NumberFormat("en-us", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(item.price)}</p>
                                    <p className='stock-text' style={{ color: 'var(--purple-btn-color)' }}>In stock</p>
                                </div>
                                <p>Quantity: {item.quantity}</p>
                                <p>Color</p>
                                <div className='quantity-container small-quantity-counter'>
                                    <QuantityCounter
                                        quantity={item.quantity}
                                        onUpdateQuantity={(newQuantity) =>
                                            updateQuantity(item.id, newQuantity)
                                        }
                                    />
                                    <button className='del-btn' onClick={() => removeFromCart(item.id)}><FaRegTrashAlt className='del-btn' /></button>
                                </div>
                            </div>

                        </div>
                    ))
                )}
                <hr />
            </div>

            <div className="cart-footer">
                {cartItems.length > 0 && (
                    <>
                        <div className="cart-subtotal">
                            <span>Subtotal:</span>
                            <span>
                                ₦{new Intl.NumberFormat("en-us", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculateSubtotal())}
                            </span>
                        </div>
                        <div className="cart-actions">
                            <button onClick={navigateToCartPage} className="action-btn view-cart">View Cart</button>
                            <br />
                            <button onClick={navigateToCheckout} className="action-btn checkout">Checkout</button>
                        </div>
                    </>
                )}
            </div>
        </div >
    );
};

Cart.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleCart: PropTypes.func.isRequired,
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    removeFromCart: PropTypes.func.isRequired,
};

export default Cart;

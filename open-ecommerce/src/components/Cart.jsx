import { FaRegTrashAlt, FaArrowLeft } from "react-icons/fa";
import './css/cart.css';
import PropTypes from 'prop-types'


const Cart = ({ isOpen, toggleCart, cartItems, removeFromCart }) => {
    return (
        <div className={`cart-container ${isOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <button onClick={toggleCart}><FaArrowLeft /></button>
                <h2>Your Cart</h2>
            </div>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty!</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p>₦ {new Intl.NumberFormat('en-us').format(item.price)}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>
                                <FaRegTrashAlt />
                            </button>
                        </div>
                    ))
                )}
            </div>
            <div className="cart-footer">
                <p>Total: ₦ {new Intl.NumberFormat('en-us').format(cartItems.reduce((total, item) => total + item.price, 0))}</p>
                <button className="action-btns checkout">Checkout</button>
            </div>
        </div>
    );
};



export default Cart;

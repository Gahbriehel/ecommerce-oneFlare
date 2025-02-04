import './css/cartPage.css'
import Footer from "./Country";
import { TbShoppingBag } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import QuantityCounter from './QuantityCounter';
import { Link, useNavigate } from 'react-router-dom';


// import QuantityCounter from './QuantityCounter'
const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
    console.log("cart items", cartItems)

    const navigate = useNavigate();

    const continueShopping = () => navigate('/')
    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cartPage-container">
            <h2>My Cart</h2>
            <div className="cart-all">
                {cartItems.length === 0 ? (
                    <div className='empty-cart'>
                        <TbShoppingBag className="cart-bag" />
                        <p>Your shopping cart is empty!</p>
                        <button onClick={continueShopping} className="continue-shopping-btn">
                            Continue shopping
                        </button>
                    </div>
                ) : (
                    <div className="cart-content0">
                        <div className="cart-content">
                            <table>
                                <thead>
                                    <tr className='cart-top'>
                                        <th className='first-child'>product</th>
                                        <th>price</th>
                                        <th>quantity</th>
                                        <th>subtotal</th>
                                    </tr>
                                </thead>
                                {
                                    cartItems.map((item) => {
                                        return (
                                            <>
                                                <tbody key={item.id}>
                                                    <tr className='table-details'>
                                                        <td className='cart-item-image'>
                                                            <img src={item.image} alt="item image" />
                                                            <span> {item.name}</span>
                                                        </td>
                                                        <td>₦{new Intl.NumberFormat('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(item.price)}</td>
                                                        <td>
                                                            <QuantityCounter
                                                                className="item-quantityy"
                                                                quantity={item.quantity}
                                                                onUpdateQuantity={(newQuantity) => {
                                                                    updateQuantity(item.id, newQuantity)
                                                                }}
                                                            />
                                                        </td>
                                                        <td>₦{new Intl.NumberFormat('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(item.price * item.quantity)}</td>
                                                        <td><button onClick={() => removeFromCart(item.id)} className='del-btn-cart'><FaRegTrashAlt className='del-btn-cart' /></button></td>
                                                    </tr>
                                                </tbody>
                                            </>
                                        )
                                    })
                                }
                            </table>
                        </div>
                        <div className="cartPage-checkout-container">
                            <div className="checkout-coupon">
                                <input type="text" placeholder='Coupon code' />
                                <button>Apply Coupon</button>
                            </div>
                            <div className="cartPage-checkout">
                                <h3>Cart Total</h3>
                                <hr />
                                <div className="total-amount">
                                    <p>Total:</p>
                                    <p>₦{new Intl.NumberFormat('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(calculateTotal())}</p>
                                </div>
                                <hr />
                                <p>Taxes and shipping will be calculated at checkout</p>
                                <hr />
                                <Link to='/checkout'><button>Proceed to Checkout</button></Link>
                            </div>
                        </div>
                        <Footer />
                    </div>

                )
                }
            </div>


        </div >
    )
}

export default CartPage
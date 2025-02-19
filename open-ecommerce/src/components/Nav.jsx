import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import './css/nav.css';
import { SearchButton } from "../assets/svg/searchButton";
import { ShoppingCartIcon } from "../assets/svg/shoppingCartIcon";
import { Logo } from "../assets/svg/logo";


const Nav = ({ toggleCart, cartItemsCount }) => {
    return (
        <>
            <div className="nav-container">
                <div className="big-nav">
                    <div className="nav-left">
                        <ul>
                            <li>
                                <Link to="/" className="nav-link logo">
                                    <img src="/images/logo.png" alt="Logo" />
                                    {/* <Logo /> */}
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link business-name">
                                    <span>Slack Market and Shops</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <div className="search">
                            <div className="search-container">
                                <input type="text" className="search-input" placeholder="Search" />
                                <span className="search-icon"><SearchButton /></span>
                            </div>
                        </div>
                        <span onClick={toggleCart} className="cart-icon">
                            <p><ShoppingCartIcon sty /></p>
                            {cartItemsCount > 0 && <sup className="cart-count">{cartItemsCount}</sup>}
                        </span>
                    </div>
                </div>
                <div className="small-search">
                    <div className="search-container1">
                        <input type="text" className="search-input1" placeholder="Search" />
                        <span><IoIosSearch className="search-icon1" /></span>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Nav;
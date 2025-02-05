import { Link, useLocation } from "react-router-dom";
import { TbShoppingBag } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import './css/nav.css';

const Nav = ({ toggleCart, cartItemsCount }) => {
    const currentPage = useLocation().pathname;

    return (
        <>
            <div className="nav-container">
                <div className="big-nav">
                    <div className="nav-left">
                        <ul>
                            <li>
                                <Link to="/" className="nav-link logo">
                                    <img src="/images/logo.png" alt="Logo" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link business-name">
                                    <strong>Slack Market and Shops</strong>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className={currentPage === '/' ? 'nav-link link-active shop-text' : 'nav-link shop-text'}
                                >
                                    Shop
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-right">
                        <div className="search">
                            <div className="search-container">
                                <input type="text" className="search-input" placeholder="Search" />
                                <span><IoIosSearch className="search-icon" /></span>
                            </div>
                        </div>
                        <span onClick={toggleCart} className="cart-icon">
                            <p><TbShoppingBag /></p>
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
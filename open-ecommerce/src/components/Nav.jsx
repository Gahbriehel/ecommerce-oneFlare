import { Link, useLocation } from "react-router-dom"
import { TbShoppingBag } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import './css/nav.css'


const Nav = ({ toggleCart, cartItemsCount }) => {
    const currentPage = useLocation().pathname;

    return (
        <>
            <div className="nav-container">
                <div className="nav-left">
                    <ul>
                        <li><Link to="/" className="nav-link logo">logo</Link></li>
                        <li><Link to="/" className="nav-link">home</Link></li>
                        <li><Link to="/contact" className={currentPage === '/contact' ? 'link-active nav-link' : 'nav-link'}>contact</Link></li>
                        <li><Link to="/" className={currentPage === '/' ? 'nav-link link-active' : 'nav-link'}>shop</Link></li>
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
                        <TbShoppingBag />
                        {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
                    </span>
                </div>
            </div >
            <hr />

        </>
    )
}

export default Nav
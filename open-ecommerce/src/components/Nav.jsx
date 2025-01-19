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
                        <li><Link to="/" className="nav-link">logo</Link></li>
                        <li><Link to="/" className="nav-link">home</Link></li>
                        <li><Link to="/contact" className={currentPage === '/contact' ? 'link-active nav-link' : 'nav-link'}>contact</Link></li>
                        <li><Link to="/" className={currentPage === '/' ? 'nav-link link-active' : 'nav-link'}>shop</Link></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <span><IoIosSearch /></span>
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
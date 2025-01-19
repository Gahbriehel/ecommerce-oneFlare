import { MdKeyboardArrowDown } from "react-icons/md";
import './css/home.css'
import Footer from "./Country";
import { useState } from "react";
import homeProducts from "./Homeproducts";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Home = () => {

    const [products, setProducts] = useState(homeProducts)
    console.log(setProducts)
    return (
        <div className="home-container">
            <div className="products-section">
                <h1>Products</h1>
                <div className="products-form">
                    <form>
                        <div className="filter-container">
                            <div className="filter-text">
                                <p><strong>Filter :</strong></p>
                            </div>
                            <div className="filter-input">
                                <label htmlFor="availability">Availability <span><MdKeyboardArrowDown /></span></label>
                            </div>
                            <div className="filter-input">
                                <label htmlFor="price">Price <span><MdKeyboardArrowDown /></span></label>
                            </div>
                            <div className="filter-input">
                                <label htmlFor="category">Category <span><MdKeyboardArrowDown /></span></label>
                            </div>
                        </div>
                        <div className="sortBy-container">
                            <div className="sortBy-text">
                                <p><strong>Sort By :</strong></p>
                            </div>
                            <div className="filter-container">
                                <label htmlFor="alphabetically">Alphabetically A - Z<span><MdKeyboardArrowDown /></span></label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="main-section">
                <div className="products">
                    {
                        products.map((product) => {
                            return (
                                <div key={product.id}>
                                    <div>
                                        <div className="box">
                                            <div className="image-box">
                                                <Link to={`/product/${product.id}`} state={{ product, products }}><img src={product.image} alt="product" className="product-image"></img></Link>
                                            </div>
                                            <div className="product-info">
                                                <p>{product.name}</p>
                                                <p className="old-price">₦ {new Intl.NumberFormat('en-us').format(product.oldPrice)}</p>
                                                <p className="price">₦ {new Intl.NumberFormat('en-us').format(product.price)}</p>
                                            </div>
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

export default Home
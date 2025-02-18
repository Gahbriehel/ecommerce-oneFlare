import './css/home.css'
import Footer from "./Country";
import { useState } from "react";
import homeProducts from "./Homeproducts";
import { Link } from "react-router-dom";
import Filters from './Filters';
import { TbShoppingBag } from "react-icons/tb";
import { IconButton, Tooltip } from '@radix-ui/themes';
import { AddToCartBtn } from '../assets/svg/addToCartBtn';

const Home = ({ addToCart }) => {
    const [products] = useState(homeProducts);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="home-container">
            <Filters />
            <div className="main-section">
                <div className="products">
                    {products.map((product) => (
                        <div key={product.id}>
                            <div>
                                <div className="box">
                                    <div className="image-box">
                                        <span className='sale-text'>sale</span>
                                        <Link to={`/product/${product.id}`} state={{ product, products }}>
                                            <img src={product.image} alt="product" className="product-image" />
                                        </Link>
                                    </div>
                                    <div className="product-info">
                                        <div className="product-info-top">
                                            <Link className='category-link'>
                                                <p className='product-category-p'>{product.category}</p>
                                            </Link>
                                            <p className='product-name-p'>{product.name}</p>
                                            <p className="old-price">
                                                ₦{new Intl.NumberFormat('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(product.oldPrice)}
                                            </p>
                                            <p className="price">
                                                ₦{new Intl.NumberFormat('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(product.price)}
                                            </p>
                                        </div>
                                        <div>
                                            <Tooltip content="Add to cart">
                                                <IconButton
                                                    radius="full"
                                                    onClick={() => handleAddToCart(product)}
                                                >
                                                    <AddToCartBtn className='shoppingBag' />
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <Footer />
        </div>
    );
};

export default Home;
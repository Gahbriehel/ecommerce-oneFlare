import './css/home.css'
import Footer from "./Country";
import { useState } from "react";
import homeProducts from "./Homeproducts";
import { Link } from "react-router-dom";
import Socials from "./Socials";
import Filters from './Filters';

const Home = () => {

    const [products, setProducts] = useState(homeProducts)
    console.log(setProducts)


    return (
        <div className="home-container">
            <Filters />
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
            <hr />
            <Footer />
            <Socials />
        </div>
    )
}

export default Home
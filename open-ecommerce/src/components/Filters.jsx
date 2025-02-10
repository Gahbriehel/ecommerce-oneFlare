import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import homeProducts from "./Homeproducts";
import { GiSettingsKnobs } from "react-icons/gi";
import './css/filter.css'
const Filters = () => {
    const [products, setProducts] = useState(homeProducts)
    console.log(setProducts)

    // const [showFilters, setShowFilters] = useState(false)
    const [openAvailability, setOpenAvailability] = useState(false)
    const [openPriceFilter, setOpenPriceFilter] = useState(false)
    const [openCategoryFilter, showOpenCategoryFilter] = useState(false)
    const [openAlphabetFilter, setOpenAlphabetFilter] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)
    const [showFilters, setShowFilters] = useState(!isMobile)

    const handleShowFilters = (e) => {
        e.preventDefault(setShowFilters(!showFilters))
    }

    const handleShowAvailability = (e) => {
        e.preventDefault(setOpenAvailability(!openAvailability))
    }

    const handleShowPriceFilter = (e) => {
        e.preventDefault(setOpenPriceFilter(!openPriceFilter))
    }

    const handleShowCategoryFilter = (e) => {
        e.preventDefault(showOpenCategoryFilter(!openCategoryFilter))
    }

    const handleShowAlphabetFilter = (e) => {
        e.preventDefault(setOpenAlphabetFilter(!openAlphabetFilter))
    }

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 480;
            setIsMobile(mobile);
            if (!mobile) {
                setShowFilters(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="products-section">
            <h1>Products</h1>
            <div className="products-form">
                <form>
                    <div className="filter-container">
                        <div className="filter-container-text">
                            <p>Showing products 1 - 20 of {products.length} products</p>
                        </div>
                        <button onClick={handleShowFilters} className="filters-toggler"><GiSettingsKnobs /></button>
                        {
                            showFilters && (
                                <div className="filter-section">
                                    <div className="filter-section-text">
                                        <p>Filter :</p>
                                    </div>
                                    <div className="filter-input">
                                        <button onClick={handleShowAvailability} className="availability-btn">
                                            <span>Availability</span>
                                            <MdKeyboardArrowDown className="arrow-icon" />
                                        </button>
                                        {openAvailability && (
                                            <div className="availability-container">
                                                <div className="availability-input">
                                                    <input type="checkbox" id="in-stock" />
                                                    <label htmlFor="in-stock"> In stock (😉)</label>
                                                </div>
                                                <div className="availability-input">
                                                    <input type="checkbox" id="out-stock" />
                                                    <label htmlFor="out-stock"> Out of stock (😉)</label>
                                                </div>
                                            </div>
                                        )
                                        }
                                    </div>
                                    <div className="filter-input">
                                        <button onClick={handleShowPriceFilter} className="range-btn">
                                            <span>Price</span>
                                            <span><MdKeyboardArrowDown className="arrow-icon2" /></span>
                                        </button>
                                        {
                                            openPriceFilter && (
                                                <div className="price-range-container">
                                                    <div className="range-input">
                                                        <label htmlFor="from">From:</label>
                                                        <br />
                                                        <input type="text" inputMode="numeric" placeholder="Enter amount" id="from" />
                                                    </div>
                                                    <div className="range-input">
                                                        <label htmlFor="to">To:</label>
                                                        <br />
                                                        <input type="text" inputMode="numeric" placeholder="Enter amount" id="to" />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="filter-input">
                                        <button onClick={handleShowCategoryFilter} className="category-btn">
                                            <span>Category</span>
                                            <span><MdKeyboardArrowDown /></span>
                                        </button>
                                        {
                                            openCategoryFilter && (
                                                <div className="category-container">
                                                    <div className="category-input">
                                                        <input type="checkbox" id="bags" />
                                                        <label htmlFor="bags"> Bags</label>
                                                    </div>
                                                    <div className="category-input">
                                                        <input type="checkbox" id="shoes" />
                                                        <label htmlFor="shoes"> Shoes</label>
                                                    </div>
                                                    <div className="category-input">
                                                        <input type="checkbox" id="clothes" />
                                                        <label htmlFor="clothes"> Clothes</label>
                                                    </div>
                                                    <div className="category-input">
                                                        <input type="checkbox" id="accessories" />
                                                        <label htmlFor="accessories"> Accessories</label>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="filter-input">
                                        <button onClick={handleShowAlphabetFilter} className="alpha-category-btn">Alphabetically A - Z<span><MdKeyboardArrowDown /></span></button>
                                        {
                                            openAlphabetFilter && (
                                                <div className="alphabet-container">
                                                    <div className="alpha-category-input">
                                                        <span>Alphabetically from A-Z</span>
                                                    </div>
                                                    <div className="alpha-category-input">
                                                        <span>Alphabetically from Z-A</span>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Filters
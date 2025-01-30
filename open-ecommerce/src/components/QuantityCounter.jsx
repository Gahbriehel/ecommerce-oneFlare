import { FiMinus, FiPlus } from "react-icons/fi";
import './css/counter.css'



const QuantityCounter = ({ quantity, onUpdateQuantity }) => {

    const handleDecrement = () => {
        onUpdateQuantity(Math.max(quantity - 1, 1))
    }

    const handleIncrement = () => {
        onUpdateQuantity(quantity + 1)
    }

    return (
        <div className="counter">
            <button onClick={handleDecrement}><FiMinus /></button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}><FiPlus /></button>
        </div>
    )
}

export default QuantityCounter
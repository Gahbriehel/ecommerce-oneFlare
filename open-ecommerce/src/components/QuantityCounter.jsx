import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import './css/counter.css'



const QuantityCounter = () => {

    const [count, setCount] = useState(1);

    const handleDecrement = () => {
        setCount(Math.max(count - 1, 1))
    }

    const handleIncrement = () => {
        setCount(count + 1)
    }

    return (
        <div className="counter">
            <button onClick={handleDecrement}><FiMinus /></button>
            <span>{count}</span>
            <button onClick={handleIncrement}><FiPlus /></button>
        </div>
    )
}

export default QuantityCounter
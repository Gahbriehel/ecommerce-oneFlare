import { CiCircleCheck } from "react-icons/ci";
import './css/confirmation.css'


const Confirmation = () => {

    const shop = "Let's Shop"
    return (
        <div className="confirmation-container">
            <div className="confirmation-notif">
                <p className="check"><CiCircleCheck /></p>
                <p className="success-text">Thank you for shopping with us</p>
            </div>
            <div className="confirmation-container-btns">
                <button>{shop}</button>
                <br />
                <button>Exit</button>
            </div>
        </div>
    )
}

export default Confirmation
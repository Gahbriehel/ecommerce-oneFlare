import { useState } from "react";
import './css/checkout.css'

const Checkout = () => {
    const [billingOption, setBillingOption] = useState("same");

    const handleBillingOptionChange = (e) => {
        setBillingOption(e.target.value);
    };

    const tipSection = () => (
        <div className="tip-section">
            <h2>Add Tip</h2>
            <div className="tip-buttons">
                <button type="button">None</button>
                <button type="button">5%</button>
                <button type="button">10%</button>
                <button type="button">15%</button>
                <button type="button">20%</button>
            </div>
            <div className="custom-tip">
                <label htmlFor="custom-tip">Custom Tip:</label>
                <input type="number" id="custom-tip" name="custom-tip" />
            </div>
            <p>Thank you, we appreciate it!</p>
        </div>
    );

    const renderPaymentSection = () => (
        <div className="payment-section">
            <h2>Payment</h2>
            <div className="payment-logos">
                <div className="payment-logo-left">
                    <img src="/images/paystack.png" alt="Paystack" />
                </div>
                <div className="payment-logo-right">
                    <img src="/images/mastercard.png" alt="Mastercard" />
                    <img src="/images/maestro.png" alt="Maestro" />
                    <img src="/images/visa.png" alt="Visa" />
                </div>
            </div>
            <button type="button" className="pay-button">
                Pay
            </button>
        </div>
    );

    return (
        <div className="checkout-page-container">
            <div className="checkout-contact">
                <form>
                    <div className="form-container contact">
                        <h1>Contact</h1>
                        <label htmlFor="email">Email or Phone number:</label>
                        <br />
                        <input
                            type="text"
                            name="email"
                            id="email"
                            aria-label="Email or Phone number"
                            placeholder="Enter Email or Phone Number"
                        />
                        <br />
                        <input type="radio" name="emailCheck" id="emailCheck" />
                        <label htmlFor="emailCheck">Email me with news and offers</label>
                    </div>

                    <div className="form-container delivery">
                        <h1>Delivery</h1>
                        <div className="name-div">
                            <div className="fname">
                                <label htmlFor="fname">First name:</label>
                                <br />
                                <input
                                    type="text"
                                    name="fname"
                                    id="fname"
                                    aria-label="First name"
                                    placeholder="Enter first name"
                                />
                            </div>
                            <div className="lname">
                                <label htmlFor="lname">Last name:</label>
                                <br />
                                <input
                                    type="text"
                                    name="lname"
                                    id="lname"
                                    aria-label="Last name"
                                    placeholder="Enter last name"
                                />
                            </div>
                        </div>
                        <label htmlFor="apartment">Apartment, Suite, etc (optional):</label>
                        <br />
                        <input
                            type="text"
                            name="apartment"
                            id="apartment"
                            aria-label="Apartment"
                            placeholder="Enter apartment, suite, etc"
                        />
                        <br />
                        <label htmlFor="address">Address:</label>
                        <br />
                        <input
                            type="text"
                            name="address"
                            id="address"
                            aria-label="Address"
                            placeholder="Enter address"
                        />
                        <div className="address-div">
                            <div className="state">
                                <label htmlFor="state">State:</label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    aria-label="State"
                                    placeholder="Enter state"
                                />
                            </div>
                            <div className="city">
                                <label htmlFor="city">City:</label>
                                <input type="text" name="city" id="city" aria-label="City" placeholder="Enter city" />
                            </div>
                            <div className="postal-code">
                                <label htmlFor="postal">Postal code (optional):</label>
                                <input
                                    type="text"
                                    name="postal"
                                    id="postal"
                                    aria-label="Postal code"
                                    placeholder="Enter postal code"
                                />
                            </div>
                        </div>
                        <input type="radio" name="save-delivery-info" id="save-delivery-info" />
                        <label htmlFor="save-delivery-info">Save this information for later</label>
                    </div>

                    <div className="form-container billing">
                        <h1>Billing Address</h1>
                        <div className="billing-options">
                            <div className="billing-option">
                                <input
                                    type="radio"
                                    id="same-shipping-address"
                                    name="billingOption"
                                    value="same"
                                    checked={billingOption === "same"}
                                    onChange={handleBillingOptionChange}
                                />
                                <label htmlFor="same-shipping-address">Same as shipping address</label>
                            </div>
                            <div className="billing-option">
                                <input
                                    type="radio"
                                    id="diff-shipping-address"
                                    name="billingOption"
                                    value="different"
                                    checked={billingOption === "different"}
                                    onChange={handleBillingOptionChange}
                                />
                                <label htmlFor="diff-shipping-address">
                                    Different from shipping address
                                </label>
                            </div>

                        </div>

                        {billingOption === "different" && (
                            <div className="additional-billing-fields">
                                <div className="name-div">
                                    <div className="fname">
                                        <label htmlFor="billing-fname">First name:</label>
                                        <br />
                                        <input
                                            type="text"
                                            name="billing-fname"
                                            id="billing-fname"
                                            aria-label="First name"
                                            placeholder="Enter first name"
                                        />
                                    </div>
                                    <div className="lname">
                                        <label htmlFor="billing-lname">Last name:</label>
                                        <br />
                                        <input
                                            type="text"
                                            name="billing-lname"
                                            id="billing-lname"
                                            aria-label="Last name"
                                            placeholder="Enter last name"
                                        />
                                    </div>
                                </div>
                                <label htmlFor="billing-address">Address:</label>
                                <br />
                                <input
                                    type="text"
                                    name="billing-address"
                                    id="billing-address"
                                    aria-label="Address"
                                    placeholder="Enter address"
                                />
                                <div className="address-div">
                                    <div className="state">
                                        <label htmlFor="billing-state">State:</label>
                                        <input
                                            type="text"
                                            name="billing-state"
                                            id="billing-state"
                                            aria-label="State"
                                            placeholder="Enter state"
                                        />
                                    </div>
                                    <div className="city">
                                        <label htmlFor="billing-city">City:</label>
                                        <input
                                            type="text"
                                            name="billing-city"
                                            id="billing-city"
                                            aria-label="City"
                                            placeholder="Enter city"
                                        />
                                    </div>
                                    <div className="postal-code">
                                        <label htmlFor="billing-postal">Postal code (optional):</label>
                                        <input
                                            type="text"
                                            name="billing-postal"
                                            id="billing-postal"
                                            aria-label="Postal code"
                                            placeholder="Enter postal code"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {tipSection()}
                    {renderPaymentSection()}
                </form>
            </div>
            <div className="checkout-right">
                <h3>Product information box comes here</h3>
            </div>
        </div>
    );
};

export default Checkout;

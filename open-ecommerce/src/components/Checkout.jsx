import { useState } from "react";

const Checkout = () => {
    const [billingOption, setBillingOption] = useState("same");

    const handleBillingOptionChange = (event) => {
        setBillingOption(event.target.value);
    };

    const renderTipSection = () => (
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
                <img src="/path-to-paystack-logo" alt="Paystack" />
                <img src="/path-to-mastercard-logo" alt="Mastercard" />
                <img src="/path-to-maestro-logo" alt="Maestro" />
                <img src="/path-to-visa-logo" alt="Visa" />
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
                    {/* Contact Section */}
                    <div className="form-container contact">
                        <h1>Contact</h1>
                        <label htmlFor="email">Email or Phone number:</label>
                        <br />
                        <input
                            type="text"
                            name="email"
                            id="email"
                            aria-label="Email or Phone number"
                        />
                        <br />
                        <input type="checkbox" name="emailCheck" id="emailCheck" />
                        <label htmlFor="emailCheck">Email me with news and offers</label>
                    </div>

                    {/* Delivery Section */}
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
                        />
                        <br />
                        <label htmlFor="address">Address:</label>
                        <br />
                        <input
                            type="text"
                            name="address"
                            id="address"
                            aria-label="Address"
                        />
                        <div className="address-div">
                            <div className="state">
                                <label htmlFor="state">State:</label>
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    aria-label="State"
                                />
                            </div>
                            <div className="city">
                                <label htmlFor="city">City:</label>
                                <input type="text" name="city" id="city" aria-label="City" />
                            </div>
                            <div className="postal-code">
                                <label htmlFor="postal">Postal code (optional):</label>
                                <input
                                    type="text"
                                    name="postal"
                                    id="postal"
                                    aria-label="Postal code"
                                />
                            </div>
                        </div>
                        <input type="checkbox" name="save-delivery-info" id="save-delivery-info" />
                        <label htmlFor="save-delivery-info">Save this information for later</label>
                    </div>

                    {/* Billing Section */}
                    <div className="form-container billing">
                        <h1>Billing Address</h1>
                        <div className="billing-options">
                            <input
                                type="radio"
                                id="same-shipping-address"
                                name="billingOption"
                                value="same"
                                checked={billingOption === "same"}
                                onChange={handleBillingOptionChange}
                            />
                            <label htmlFor="same-shipping-address">Same as shipping address</label>
                            <br />
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

                        {billingOption === "different" && (
                            <div className="additional-billing-fields">
                                {/* Repeat Delivery Form */}
                                <div className="name-div">
                                    <div className="fname">
                                        <label htmlFor="billing-fname">First name:</label>
                                        <br />
                                        <input
                                            type="text"
                                            name="billing-fname"
                                            id="billing-fname"
                                            aria-label="First name"
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
                                />
                                <div className="address-div">
                                    <div className="state">
                                        <label htmlFor="billing-state">State:</label>
                                        <input
                                            type="text"
                                            name="billing-state"
                                            id="billing-state"
                                            aria-label="State"
                                        />
                                    </div>
                                    <div className="city">
                                        <label htmlFor="billing-city">City:</label>
                                        <input
                                            type="text"
                                            name="billing-city"
                                            id="billing-city"
                                            aria-label="City"
                                        />
                                    </div>
                                    <div className="postal-code">
                                        <label htmlFor="billing-postal">Postal code (optional):</label>
                                        <input
                                            type="text"
                                            name="billing-postal"
                                            id="billing-postal"
                                            aria-label="Postal code"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Tip and Payment Section */}
                    {renderTipSection()}
                    {renderPaymentSection()}
                </form>
            </div>
        </div>
    );
};

export default Checkout;

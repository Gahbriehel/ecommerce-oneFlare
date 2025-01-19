import Country from './Country'
import './css/contact.css'



const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="contact-form">
                <form>
                    <div className="input-container">
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input type="text" id="name" placeholder="Enter Name" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input type="email" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="phone">Phone number:</label>
                        <br />
                        <input type="tel" id="phone" placeholder="Enter Phone Number" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="comment">Comment:</label>
                        <br />
                        <textarea
                            id="comment"
                            placeholder="Enter Comment" />
                    </div>
                    <div className='input-container'>
                        <button>Send</button>
                    </div>

                </form>
            </div>
            <div className='country-section'>
                <Country className='country-contact' />
            </div>
        </div>
    )
}

export default Contact
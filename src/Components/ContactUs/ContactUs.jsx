import React from 'react';
import "./ContactUs.css"

function ContactUs() {
    return (
        <>
            <section style={{ padding: "6rem 0rem", backgroundColor: "white" }}>
                <div className='container'>
                    <div className='top-heading-content'>
                        <div className='contact-us-details-info'>
                            <h6>Sign up now</h6>
                            <h1>Get in touch</h1>
                            <p className='contact-us-tagline'>We’d love to hear from you. Please fill out this form.</p>
                        </div>

                    </div>
                    <div className='form-field container'>
                        <form action="">
                            <div class="mb-3 Form-container">
                                <div className='top-two-field'>
                                    <div className='first-name'>
                                        <label for="firstName" className="form-label">First name</label>
                                        <input type="text" class="form-control" id="firstName" placeholder="First name" required />
                                    </div>
                                    <div className='second-name'>
                                        <label for="lastName" className="form-label">Last name</label>
                                        <input type="text" class="form-control" id="lastName" placeholder="Last name" required />
                                    </div>
                                </div>
                                <br />

                                <div>
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Email" required />
                                </div>
                                <br />
                                <div>
                                    <label for="phoneNumber" className="form-label">Phone number</label>
                                    <input type="tel" class="form-control" id="phoneNumber" placeholder="Phone number" pattern="[0-9]{10}" required />
                                    <small id="phoneHelp" class="form-text text-muted">Please enter a valid 10-digit phone number.</small>
                                </div>
                                <br />
                                <div>
                                    <label for="message" className="form-label">Message</label>
                                    <textarea type="text" class="form-control" id="message" required></textarea>
                                </div>
                                <br />
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" required />&nbsp;&nbsp;
                                    <span style={{ color: "#475467" }}>You agree to our friendly <a href="" style={{ color: "#475467", borderBottom: "1px solid #475467" }}>privacy policy.</a></span>
                                </div>
                                <br />
                                <div>
                                    <button className='contact-us-btn' type="submit">Send message</button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </section>
        </>
    );
}

export default ContactUs;


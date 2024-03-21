import React from 'react';
import "./Signup.css"

function SignupSection() {
    return (
        <>
            <section className='bg-white Sign-up-btns'>
                <div className="container">
                    <div className="row m-auto">
                        <div className="col-lg-6">
                            <div>
                                <h2 style={{ fontSize: "32px" }}><b>Ready to get started?</b></h2>
                                <span style={{ fontSize: "32px" }}>Sign up or contact us</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <a href="">Sign Up</a>
                                <a href="">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default SignupSection;

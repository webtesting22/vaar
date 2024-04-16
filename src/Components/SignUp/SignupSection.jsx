import React from 'react';
import "./Signup.css"
import { Link } from "react-router-dom";
function SignupSection() {
    return (
        <>
            <section className=' Sign-up-btns'>
                <div className="container">
                    <div className="row m-auto">
                        <div className="col-lg-6">
                            <div>
                                <h2 className='sign-up-title'><b>Ready to get started?</b></h2>
                                <span className='sign-up-tagline'>Sign up or contact us</span>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div>
                                <button><Link to="/ContactUs">Sign Up</Link></button>
                                <button> <a href="" className='text-white'>Contact Us</a></button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default SignupSection;

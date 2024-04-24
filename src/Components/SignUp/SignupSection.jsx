import React from 'react';
import "./Signup.css"
import { Link } from "react-router-dom";
function SignupSection() {
    return (
        <>
            <section className=' Sign-up-btns' style={{ paddingTop: "0px" }}>
                <div className="container" style={{display:"flex",justifyContent:"center"}}>
                    <div>
                        {/* <h2 className='sign-up-title'><b>Ready to get started?</b></h2> */}
                        <span className='sign-up-tagline' style={{ fontWeight: "300" }}>Questions? Comments? Let's debate!</span>
                        <button><Link to="/ContactUs">Contact Us</Link></button>
                    </div>
                    {/* <div className="row m-auto">
                        <div className="col-lg-6" >
                            <div>
                                <h2 className='sign-up-title'><b>Ready to get started?</b></h2>
                                <span className='sign-up-tagline' style={{ fontWeight: "300" }}>Questions? Comments? Let's debate!</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='sign-up-btn-container'>
                                <button><Link to="/ContactUs">Contact Us</Link></button>
                                <button> <a href="" className='text-white'>Contact Us</a></button>
                            </div>
                        </div>
                    </div> */}
                </div>

            </section>
        </>
    );
}

export default SignupSection;

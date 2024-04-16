import React, { useState, useEffect } from 'react';
import "./Founder.css";
import animatedGirl from "../pictures/animatedgirl.png";
import founderPicture from "../pictures/owner.jpg"
import img1 from "../pictures/About-icons/lightning.svg"
import img2 from "../pictures/About-icons/graph.svg"
import img3 from "../pictures/About-icons/command.svg"


function Founder() {

    return (
        <>
            <section id='Founder-section'>
                <div className="container">
                    <div className='text-center' >
                        <hr />
                        <h1 className='section-heading-big'>Value Proposition</h1>
                        <p className='section-para text-white'>In a world that constantly builds and breaks itself down through disruption, confusion, and warfare, we offer a store of value that stands the tests of time.</p>
                    </div>
                    <div className="row w-100 m-auto">
                        <div className="col-lg-6">
                            <img src={animatedGirl} className='w-100 animated-girl-pick' alt="" />
                        </div>
                        <div className="col-lg-6" style={{ display: "flex", alignItems: "center" }}>
                            <div className='right-side-container'>
                                <div>
                                    <img src={img1} alt="" />
                                    <h2>Seamless Platform</h2>
                                    <span>Browse real estate at your fingertips and own it within click.</span>
                                </div>
                                <div >
                                    <img src={img2} alt="" />
                                    <h2>No need for large upfront capital</h2>
                                    <span>Unlike traditional ownership of real estate, we eliminate the need for large upfront capital.</span>
                                </div>
                                <div>
                                    <img src={img3} alt="" />
                                    <h2>Earn a stable income without the hassels</h2>
                                    <span>The rental income generated by the assets you own gets passed on to you in the form of quarterly dividends.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='founder-info'>
                        <div className="row">
                            <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                                <div className='content-founder mt-5'>
                                    <i class="bi bi-quote quote-icon"></i>
                                    <div>
                                        <h1>We’ve been using VAAR to kick start every new project and can’t imagine working without it.</h1>
                                        <img src={founderPicture} alt="Not/loaded" className='owner-mobile-img' />
                                        <h2>From the Founder</h2>
                                        <h3>Vidhi Kankaria</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <br />
                                        <span>Note For Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 owner-picture"  >
                                <img src={founderPicture} className='founder-img' style={{ borderRadius: "20px" }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Founder;

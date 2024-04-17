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
                        <h1 className='section-heading-big' style={{ fontWeight: "300", fontSize: "50px" }}>Value Proposition</h1>
                        <p className='section-para text-white'>In a world that constantly builds and breaks itself down through disruption, confusion, and warfare, we offer a store of value that stands the tests of time.</p>
                    </div>
                    <div className="padding-slite"></div>
                    <div className="padding-slite"></div>
                    <div className="row w-100 m-auto">
                        <div className="col-lg-6">
                            <div className='right-side-container'>

                                {/* <div>
                                    <img src={img1} alt="" />
                                    <h2>Seamless Platform</h2>
                                    <span>Browse real estate at your fingertips and own it within click.</span>
                                </div> */}
                                <div >
                                    <img src={img2} alt="" />
                                    <h2>Asset Quality</h2>
                                    <span>The idea is to invest in assets that grow with what surrounds them. We don’t buy into what was or what will be.</span>
                                   <br /><br /><br />
                                    <span>We buy what is here to stay.</span>
                                </div>
                                <div >
                                    <img src={img2} alt="" />
                                    <h2>Intuitive Interface</h2>
                                    <span>The complexities of real estate transactions often deter smaller investors. However, Vaar prides itself on making it accessible at users' fingertips.</span>
                                    {/* <span></span> */}<br /><br />
                                </div>
                            </div>

                            {/* <img src={animatedGirl} className='w-100 animated-girl-pick' alt="" /> */}
                        </div>
                        <div className="col-lg-6" style={{ display: "flex", alignItems: "center" }}>
                            <div className='right-side-container'>
                                {/* <div>
                                    <img src={img1} alt="" />
                                    <h2>Seamless Platform</h2>
                                    <span>Browse real estate at your fingertips and own it within click.</span>
                                </div> */}
                                <div>
                                    <img src={img3} alt="" />
                                    <h2>Diversity</h2>
                                    <span>Vaar is being built with a vision to offer investments in real assets that work for one's future. Diversification in these assets can be capital intensive and challenging to manage. </span>
                                    <br /><br />
                                    <span>We solve for both of these issues.</span>
                                </div>
                               
                                <div>
                                    <img src={img3} alt="" />
                                    <h2>Transparency</h2>
                                    <span>Transparency is our top priority. We disclose all costs related to each asset, ensuring our investors have the necessary information to make well-informed decisions.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="padding-slite"></div>
                    <div className="padding-slite"></div>
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

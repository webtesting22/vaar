import React, { useState, useEffect } from 'react';
import "./Founder.css";
import animatedGirl from "../pictures/animatedgirl.png";

function Founder() {

    return (
        <>
            <section id='Founder-section'>
                <div className="container">
                    <div className='text-center'>
                        <hr />
                        <h1 className='section-heading'>VAAR is the start</h1>
                        <p className='section-para'>In a world that constantly builds and breaks itself down through disruption, confusion, and<br /> warfare, we offer a store of value that stands the tests of time.</p>
                    </div>
                    <div className="row w-100">
                        <div className="col-lg-6">
                            <img src={animatedGirl} className='w-100' alt="" />
                        </div>
                        <div className="col-lg-6" style={{display:"flex", alignItems:"center"}}>
                            <div className='right-side-container'>
                                <div>
                                    <h2>Seamless Platform</h2>
                                    <span>Browse real estate at your fingertips and own it within click.</span>
                                </div>
                                <div>
                                    <h2>No need for large upfront capital</h2>
                                    <span>Unlike traditional ownership of real estate, we eliminate the need for large upfront capital.</span>
                                </div>
                                <div>
                                    <h2>Earn a stable income without the hassels</h2>
                                    <span>The rental income generated by the assets you own gets passed on to you in the form of quarterly dividends.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Founder;

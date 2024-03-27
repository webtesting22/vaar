import React from 'react';
import "./About.css"
function AboutUs() {
    return (
        <>

            <section id='About-section'>
                <div className="section-padding"></div>
                <div className="section-padding"></div>
                <div className="container">
                    <div className='top-about-section'>
                        <div>
                            <h1>Vaar is your gatewayto the world of real estate</h1>
                            <p>The platform enables you to invest in prime, income-generating real estate through fractional ownership, eliminating the need for substantial upfront capital. Through Discreit, you can create a diversified portfolio of residential assets that vary in their risk and return profile.</p>
                            <br />
                            <a href="" className='btn-styling'>Get Started</a>
                        </div>
                    </div>
                    <div className="section-pading"></div>

                </div>
                <section className='bg-white'>
                    <div className="container">
                        <div className='section-top-content'>
                            <div className="top-span">Our values</div>
                            <div><h2>How we work at VAAR</h2></div>
                            <div className='about-tagline'><p>Our shared values keep us connected and guide us as one team.</p></div>
                        </div>
                        <div className="section-padding"></div>
                        <div className="row w-100">
                            <div className="col-lg-4">

                            </div>

                        </div>
                    </div>

                </section>

            </section>

        </>
    );
}

export default AboutUs;

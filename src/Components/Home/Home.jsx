import React from 'react';
import "./Home.css"
function Home() {
    return (
        <>
            <section id='Home_section'>
                <div className='container text-center'>
                    <div className='content-container-responsive'>
                        <h1 className='main-global-heading'>Real-estate, simplified</h1>
                        <p>Vaar enables portfolio investment in <span><i>prime, income-generating</i></span> real estate. We believe diversification in real assets should be easy and that it has a place in portfolios of all sizes.</p>
                        <div className='email-collect'>
                        <input type="text" placeholder='Enter Your Email'/>
                        <button className='input-btn'>Sign&nbsp;Up</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home;

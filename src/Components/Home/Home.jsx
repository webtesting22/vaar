import React from 'react';
import "./Home.css"
import "../../Components/globalcontent.css"
import homeCard from "../pictures/home-card-img.png"
// import homeMobile from "../pictures/Rectangle.png"
import Founder from '../Founder/Founder';
import Guide from '../Guide/Guide';
import Bestvalue from '../Bestvalue/Bestvalue';
import SignupSection from '../SignUp/SignupSection';
function Home() {
    return (
        <>
            <div className='parent-section'>
                <section id='Home_section'>
                    <div className='container text-center'>
                        <h1 className='main-global-heading'>Real-estate, simplified</h1>
                        <div className='content-container-responsive'>

                            <p>Vaar enables portfolio investment in <span><i>prime, income-generating</i></span> real estate. We believe diversification in real assets should be easy and that it has a place in portfolios of all sizes.</p>
                            <div className='email-collect'>
                                <input type="text" placeholder="What's your email" />
                                <button className='input-btn'>Sign&nbsp;Up</button>
                            </div>
                        </div>

                    </div>
                </section>
                <div id='second-part-section'>
                    <div className="container">
                        <div className="row w-100 m-auto">
                            <div className="col-lg-4">
                                <div className='inside-container'>
                                    <div>
                                        <div className='top-header'>
                                            <h4 className='card-title'>Invest</h4>
                                            <span>According to your individual needs</span>
                                        </div>
                                        <div className='middle-body'>
                                            <img src={homeCard} alt="" className='w-100 h-100' />
                                        </div>
                                        {/* <div className='botton-footer d-flex justify-content-between'>
                                        <div>
                                            <span>NewYork, NY</span>
                                            <p>75 wall St, New York, NY 10005</p>
                                            <button>$ 678,000</button>
                                        </div>
                                        <div>
                                            img
                                        </div>
                                </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='parent-section'>
                                    <div className='child-first'>
                                        <div className='top-header'>
                                            <h4 className='card-title'>Manage Digitally</h4>
                                            <span>Diversified assets in your portfolio</span>

                                            <h5>Linked Account</h5>
                                            <div className='connect'>
                                                <h6>Regular Saving</h6>
                                                <span>Chase</span>
                                                <hr style={{ margin: "3px" }} />
                                                <h6>Regular Checking</h6>
                                                <span>Chase</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='child-second'>
                                        {/* <img src={homeMobile} alt="" className='w-100 h-100' /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='inside-container'>
                                    <div>
                                        <div className='top-header'>
                                            <h4 className='card-title'>Earn & Track</h4>
                                            <span>Your rental income and assets efficiently</span>
                                        </div>
                                        <div className='middle-body'>
                                            <br /><br />
                                            <h4>Wallet</h4>
                                            <div>
                                                <div className='parent-content-container'>
                                                    <div className='child-content-container'>
                                                        <b>$17,500</b><br />
                                                        <span>Portfolio Value</span>
                                                    </div>
                                                    <div className='child-content-container'>
                                                        <b>8%</b><br />
                                                        <span>Expected Return 2023</span>
                                                    </div>
                                                </div>
                                                <div className='parent-content-container'>
                                                    <div className='child-content-container'>
                                                        <b>3</b><br />
                                                        <span>Assets Owner</span>
                                                    </div>
                                                    <div className='child-content-container'>
                                                        <b>$1,400</b><br />
                                                        <span>Expected Rent 2023</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className='botton-footer d-flex justify-content-between'>
                                        <div>
                                            <span>NewYork, NY</span>
                                            <p>75 wall St, New York, NY 10005</p>
                                            <button>$ 678,000</button>
                                        </div>
                                        <div>
                                            img
                                        </div>
                                </div> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <br />
                <marquee behavior="scroll" direction="left" ><h4 style={{ color: "white", fontWeight: "300", fontSize: "0.9rem" }}><span>New York</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Boston</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Las Vegas</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>San Francisc</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Seattle</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>San Diego</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Miami</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Washington</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span> Baltimore</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Orlando</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Austin</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Dallas</span></h4> </marquee>
                <br />

            </div>
            <Founder />
            <Guide />
            <Bestvalue />
            {/* <SignupSection /> */}

        </>
    )
}

export default Home;

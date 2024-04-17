import React, { useEffect } from 'react';
import "./Home.css"
import "../../Components/globalcontent.css"
import homeCard from "../pictures/home-card-img.png"
// import homeMobile from "../pictures/Rectangle.png"
import Founder from '../Founder/Founder';
import Guide from '../Guide/Guide';
import Bestvalue from '../Bestvalue/Bestvalue';
import SignupSection from '../SignUp/SignupSection';
import img1 from "../pictures/About-icons/homePageMobile.svg"
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import first from "../Home/first1.jpeg"
import second from "../Home/second2.jpeg"
// import third from "../Home/third.jpeg"
// import four from "../Home/four.png"
import { Row, Col } from "antd";
function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should only happen once
            easing: 'ease-out', // Easing option
            // You can customize other options here
        });
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
    }, []);
    return (
        <>
            <div className='parent-section'>
                <Row>
                    <Col lg={12} md={12}>
                        <section id='Home_section'>
                            <div className='container text-center'>
                               
                                <div className='content-container-responsive'>
                                <h1 className='main-global-heading ' style={{ fontWeight: "300",textAlign:"start", fontSize: "50px" }} data-aos="fade-down">Real-estate, simplified</h1>
                                    <p data-aos="fade-up" style={{ fontWeight: "200",textAlign:"start" }}>Vaar enables portfolio investment in <span><i>prime, income-generating</i></span> real estate. We believe diversification in real assets should be easy and that it has a place in portfolios of all sizes.</p>
                                    <div className='email-collect'>
                                        <input type="text" placeholder="What's your email" />
                                        <button className='input-btn'><Link to="/ContactUs" style={{ color: "black" }}>Join&nbsp;Our</Link></button>
                                    </div>
                                    <div className='mobile-view-home' data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-center">
                                        <button><Link to="/ContactUs" style={{ color: "black" }}>Join&nbsp;Our</Link></button>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </Col>
                    <Col lg={12} md={12} style={{ display: "flex", alignItems: "center" }}>
                        <div className='grid-images'>
                            <Row>
                                <Col lg={24} md={24} sm={8} style={{ display: "flex" }}>
                                    <div><img src={second} alt="" /></div>
                                    <div><img src={first} alt="" /></div>
                                </Col>
                                {/* <Col lg={12} md={12} sm={8}>
                              
                            </Col> */}

                                {/* <Col lg={4} md={12} sm={8}>
                                <div><img src={third} alt="" /></div>
                            </Col> */}
                                {/* <Col lg={6} md={12}>
                            <div><img src={four} alt="" /></div>
                        </Col> */}

                            </Row>
                        </div>
                    </Col>
                </Row>
                {/* <div id='second-part-section'>
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
                                        <div className='botton-footer d-flex justify-content-between'>
                                        <div>
                                            <span>NewYork, NY</span>
                                            <p>75 wall St, New York, NY 10005</p>
                                            <button>$ 678,000</button>
                                        </div>
                                        <div>
                                            img
                                        </div>
                                </div>
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
                                        <img src={homeMobile} alt="" className='w-100 h-100' />
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
                                        <div className='botton-footer d-flex justify-content-between'>
                                        <div>
                                            <span>NewYork, NY</span>
                                            <p>75 wall St, New York, NY 10005</p>
                                            <button>$ 678,000</button>
                                        </div>
                                        <div>
                                            img
                                        </div>
                                </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}
                <div className='mobile-show-img'>
                    <img src={img1} alt="" />

                </div>
                <br />
                <div class="marquee">
                    <div class="track">
                        <div class="content"><span>New York</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Boston</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Las Vegas</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>San Francisc</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Seattle</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>San Diego</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Miami</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Washington</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span> Baltimore</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Orlando</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Austin</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Dallas</span></div>
                    </div>
                </div>
                {/* <marquee behavior="scroll" direction="left" ><h4 style={{ color: "white", fontWeight: "300", fontSize: "3rem" }}><span>New York</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Boston</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Las Vegas</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>San Francisc</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Seattle</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>San Diego</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Miami</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Washington</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span> Baltimore</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Orlando</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Austin</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Dallas</span></h4> </marquee> */}
                <br />

            </div>
            <Founder />
            {/* <Guide /> */}
            <Bestvalue />

            {/* <VaarBlogs/> */}
            <SignupSection />

        </>
    )
}

export default Home;

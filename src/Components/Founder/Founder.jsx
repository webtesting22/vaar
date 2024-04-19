import React, { useState, useEffect, useRef } from 'react';
import "./Founder.css";
import animatedGirl from "../pictures/animatedgirl.png";
import founderPicture from "../Founder/VidhiK.png"
import img1 from "../pictures/About-icons/lightning.svg"
import img2 from "../pictures/About-icons/graph.svg"
import img3 from "../pictures/About-icons/command.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Descriptions, Carousel } from 'antd';

const ValueData = [
    {
        title: "Asset Quality",
        colorText:"Invest in assets that grow with what surrounds them.",
        Descriptions: "We don’t buy into what was, or what will be. We offer what is here to stay."
    },

    {
        title: "Transparency",
        colorText:"Know what you are getting into.",
        Descriptions: " We disclose all costs related to each asset, ensuring our investors have the necessary information to make well-informed decisions."
    },
    {
        title: "Intuitive Interface",
        colorText:"Uncomplicate your investments.",
        Descriptions: "The intricacies of any real estate transactions often crowd-out the retail investor. However, Vaar prides itself on making RE accessible at any users' fingertips."
    },
    {
        title: "Diversification",
        colorText:"Preserve your wealth.",
        Descriptions: "Diversification in real assets can be both capital intensive and challenging to manage. Vaar provides a solutions for both these issues."
    }
]
function Founder() {
    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    const carouselRef = useRef(null);

    const handlePrev = () => {
        carouselRef.current.prev();
    };

    const handleNext = () => {
        carouselRef.current.next();
    };
    return (
        <>
            <section id='Founder-section'>
                <div className="container">
                    <div className='text-center' >
                        <hr className='m-0' />
                        <h1 className='section-heading-big only-pc-heading' style={{ fontWeight: "300", fontSize: "50px", textAlign: "start" }}>Vaar solves an access problem.</h1>
                        <h1 className='section-heading-big only-mobile-heading' style={{ fontWeight: "300", fontSize: "8vw", textAlign: "start" }}>Vaar solves an access problem.</h1>
                        {/* <p className='section-para text-white text-start m-0' style={{ color: "white", fontWeight:"200" }}>Vaar enables portfolio investment in prime, income-generating real estate. We believe diversification in real assets should be easy and that it has a place in portfolios of all sizes.</p> */}
                    </div>
                    {/* <div className="padding-slite"></div> */}
                    {/* <div className="padding-slite"></div> */}
                    <div className="row w-100 m-auto home-pc">
                        {ValueData.map((item, index) => (
                            
                            // <div className="col-lg-3" key={index}></div>
                            <div className="col-lg-3" key={index}>
                                <div className='box'>
                                    <div>
                                        <div className='box-top-header'>
                                            <h2 className='box-title'>{item.title}</h2>
                                          
                                        </div>
                                        
                                        <br />
                                        <span><span style={{fontWeight:"600"}}>{item.colorText}</span> {item.Descriptions}</span>
                                    </div>


                                </div>


                            </div>
                            
                        ))}



                    </div>
                    <div className="row w-100 m-auto home-mobile">
                        <Carousel afterChange={onChange} ref={carouselRef} dots={true} >

                            {ValueData.map((item, index) => (

                                <div className="col-lg-6" key={index}>
                                    <div className='right-side-container'>
                                        <div>
                                            <h2 style={{ color: "#D4F604" }}>{item.title}</h2>
                                            <p style={{ color: "white", fontWeight:"200" }}><span style={{fontWeight:"600"}}>{item.colorText}</span> {item.Descriptions}</p>
                                        </div>


                                    </div>


                                </div>

                            ))}
                        </Carousel>


                    </div>


                    <div className="padding-slite"></div>
                    <div className="padding-slite"></div>
                    <div className='founder-info'>
                        <div className="row">
                            <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                                <div className='content-founder mt-5'>
                                    <i class="bi bi-quote quote-icon"></i>
                                    <div>
                                        <h1>New concepts are no longer intimidating, and challenges have become puzzles awaiting solutions. With this mindset, we are developing Vaar in the traditionally inaccessible realm of real estate. <br /> The ultimate goal? <b style={{color:"#D4F604"}}> Digital access to income-generating real estate for ALL.</b></h1>
                                        <img src={founderPicture} alt="Not/loaded" className='owner-mobile-img' />
                                        <h3 style={{color:"#475467"}}>Founder,</h3>
                                        <h2 style={{color:"white"}}>Vidhi Kankaria</h2>
                                        <p style={{fontWeight:"200"}}>New concepts are no longer intimidating, and challenges have become puzzles awaiting solutions. With this mindset, we are developing Vaar in the traditionally inaccessible realm of real estate. The ultimate goal?<br /> <b style={{color:"#D4F604"}}> Digital access to income-generating real estate for ALL.</b></p>
                                        <span style={{color:"#475467"}}>Founder, <br /><b style={{color:"white"}}>Vidhi Kankaria</b></span>
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

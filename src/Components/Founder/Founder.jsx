import React, { useState, useEffect, useRef } from 'react';
import "./Founder.css";
import animatedGirl from "../pictures/animatedgirl.png";
import founderPicture from "../pictures/owner.jpg"
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
        title: "💎 Asset Quality",
        Descriptions: "The idea is to invest in assets that grow with what surrounds them. We don’t buy into what was or what will be.We buy what is here to stay."
    },

    {
        title: "🤝 Intuitive Interface",
        Descriptions: "The complexities of real estate transactions often deter smaller investors. However, Vaar prides itself on making it accessible at users' fingertips."
    },
    {
        title: "📲 Diversity",
        Descriptions: "Vaar is being built with a vision to offer investments in real assets that work for one's future. Diversification in these assets can be capital intensive and challenging to manage. We solve for both of these issues."
    },
    {
        title: "🥛 Transparency",
        Descriptions: "Transparency is our top priority. We disclose all costs related to each asset, ensuring our investors have the necessary information to make well-informed decisions."
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
                        <hr className='m-0'/>
                        <h1 className='section-heading-big' style={{ fontWeight: "300", fontSize: "50px",textAlign:"start" }}>Value Proposition</h1>
                        <p className='section-para text-white text-start m-0'>In a world that constantly builds and breaks itself down through disruption, confusion, and warfare, we offer a store of value that stands the tests of time.</p>
                    </div>
                    <div className="padding-slite"></div>
                    <div className="padding-slite"></div>
                    <div className="row w-100 m-auto home-pc">
                        {ValueData.map((item, index) => (
                            <div className="col-lg-6" key={index}>
                                <div className='right-side-container'>
                                    <div>
                                        <h2>{item.title}</h2>
                                        <span>{item.Descriptions}</span>
                                    </div>


                                </div>


                            </div>
                        ))}



                    </div>
                    <div className="row w-100 m-auto home-mobile">
                        <Carousel afterChange={onChange} ref={carouselRef} dots={true} autoplay >

                            {ValueData.map((item, index) => (

                                <div className="col-lg-6" key={index}>
                                    <div className='right-side-container'>
                                        <div>
                                            <h2 style={{color:"white"}}>{item.title}</h2>
                                            <span style={{color:"white"}}>{item.Descriptions}</span>
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
